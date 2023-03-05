import { useMutation } from "@tanstack/react-query";
import { useSDK, useStorageUpload } from "@thirdweb-dev/react";
import {
  PublicationMainFocus,
  useCreatePostTypedDataMutation,
} from "../graphql/generated";
import useLensUser from "./auth/useLensUser";
import { signTypedDataWithOmmited, splitSignature } from "./helpers";
import { v4 as uuidv4 } from "uuid";

import useLogin from "./auth/useLogin";
import { LENS_HUB_CONTRACT_ADDRESS,LENS_HUB_ABI } from "src/const/contracts";

type CreatePostArgs = {
    video: File;
    title: string;
    description: string;
    content: string;
  };
  
  export function useCreatePost() {
    const { mutateAsync: requestTypedData } = useCreatePostTypedDataMutation();
    const { profileQuery } = useLensUser();
    const { mutateAsync: uploadToIpfs } = useStorageUpload();
    const sdk = useSDK();
    const { mutateAsync: loginUser } = useLogin();
  
    async function createPost({
      video,
      title,
      description,
      content,
    }: CreatePostArgs) {
      console.log("createPost", video, title, description, content);
      await loginUser();
  
      // Upload the video to IPFS
      const videoIpfsUrl = (await uploadToIpfs({ data: [video] }))[0];
  
      console.log("videoIpfsUrl", videoIpfsUrl);
  
      // *Upload the actual content to IPFS

      const postMetadata = {
        version: "2.0.0",
        mainContentFocus: PublicationMainFocus.Video,
        metadata_id: uuidv4(),
        description: description,
        locale: "en-US",
        content: content,
        external_url: null,
        video: videoIpfsUrl,
        videoMimeType: null,
        name: title,
        attributes: [],
        tags: [],
      };
  
      const postMetadataIpfsUrl = (
        await uploadToIpfs({ data: [postMetadata] })
      )[0];
  
      console.log("postMetadataIpfsUrl", postMetadataIpfsUrl);
  
      // Ask Lens for typed data
      const typedData = await requestTypedData({
        request: {
          collectModule: {
            freeCollectModule: {
              followerOnly: false,
            },
          },
          referenceModule: {
            followerOnlyReferenceModule: false,
          },
          contentURI: postMetadataIpfsUrl,
          profileId: profileQuery.data?.defaultProfile?.id,
        },
      });
  
      const { domain, types, value } = typedData.createPostTypedData.typedData;
  
      if (!sdk) return;
  
      // Sign the typed data
      const signature = await signTypedDataWithOmmited(
        sdk,
        domain,
        types,
        value
      );
  
      const { v, r, s } = splitSignature(signature.signature);
  
      // Use the signed typed data to the smart contract
      const lensHubContract = await sdk.getContractFromAbi(
        LENS_HUB_CONTRACT_ADDRESS,
        LENS_HUB_ABI
      );
  
      // Destructure(typedData.value field)
      const {
        collectModule,
        collectModuleInitData,
        contentURI,
        deadline,
        profileId,
        referenceModule,
        referenceModuleInitData,
      } = typedData.createPostTypedData.typedData.value;
  
      const result = await lensHubContract.call("postWithSig", {
        profileId: profileId,
        contentURI: contentURI,
        collectModule,
        collectModuleInitData,
        referenceModule,
        referenceModuleInitData,
        sig: {
          v,
          r,
          s,
          deadline: deadline,
        },
      });
  
      console.log(result);
    }
  
    return useMutation(createPost);
  }