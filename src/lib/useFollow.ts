import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useCreateFollowTypedDataMutation } from "src/graphql/generated";
import omit from "omit-deep";
import { signTypedDataWithOmmited, splitSignature } from "./helpers";
import { LENS_HUB_ABI, LENS_HUB_CONTRACT_ADDRESS } from "src/const/contracts";
import { useMutation } from "@tanstack/react-query";
import useLogin from "./auth/useLogin";



export function useFollow(){
    const {mutateAsync:requestTypedData} = useCreateFollowTypedDataMutation();
    const sdk = useSDK();
    const address = useAddress();
    const { mutateAsync: loginUser } = useLogin();

    async function follow(userId:string){
        //login
        await loginUser();


        // get the typed data for the user to sign in
        const typedData = await requestTypedData({
            request:{
                follow:[
                    {
                        profile:userId,
                    }
                ]
            }
        })
        const { domain, types, value } = typedData.createFollowTypedData.typedData;

        if (!sdk) return;
    
        // 2. Sign the typed data using the SDK
        const signature = await signTypedDataWithOmmited(
          sdk,
          domain,
          types,
          value
        );

        const {v,r,s} = splitSignature(signature.signature);
    
        const lensHubContract = await sdk.getContractFromAbi(
            LENS_HUB_CONTRACT_ADDRESS,
            LENS_HUB_ABI
        )
        const result = await lensHubContract.call("followWithSig", {
            follower: address,
            profileIds: [userId],
            datas: value.datas,
            sig: {
              v,
              r,
              s,
              deadline: value.deadline,
            },
          });
      
          console.log(result);
        }
    
    return useMutation(follow);

}