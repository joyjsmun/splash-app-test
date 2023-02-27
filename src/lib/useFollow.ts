import { useMutation } from "@tanstack/react-query";
import { useAddress, useSDK } from "@thirdweb-dev/react";

import { LENS_HUB_CONTRACT_ABI, LENS_HUB_CONTRACT_ADDRESS } from "src/const/cotract";
import {useCreateFollowTypedDataMutation} from "../graphql/generated"
import useLogin from "./auth/useLogin";
import { signTypedDataWithOmmitted_TypeName, splitSigature } from "./helpers";

export function useFollow(){
    const {mutateAsync:requestTypedData} = useCreateFollowTypedDataMutation();
    const sdk = useSDK();
    const address = useAddress();
    const {mutateAsync:loginUser} = useLogin()

    async function follow(userId:string){
        await loginUser();

    // 1.get the typed data for user to sign
        const typedData = await requestTypedData({
        request:{
            follow:[
                {
                    profile:userId,
                }
            ]
        }
    });

    const { domain, types, value } = typedData.createFollowTypedData.typedData;


    if(!sdk) return;

    // 2.sign the typed data using the SDK
    const signature = await signTypedDataWithOmmitted_TypeName(
        sdk,
        domain,
        types,
        value
    );

    const {v,r,s} = splitSigature(signature.signature);

    // 3.send the typed data to the smart contract to perform the write operation on the blockchain
        const lensHubContract = await sdk.getContractFromAbi(
            LENS_HUB_CONTRACT_ADDRESS,
            LENS_HUB_CONTRACT_ABI
        )
    
    // 4. call the smart contract function called "followWithSig"
    const result = await lensHubContract.call("followWithSig", {
        follower:address,
        profileIds:[userId],
        datas:value.datas,
        sig:{
            v,
            r,
            s,
            deadline:value.deadline
        }
    });
    console.log(result);
}

    return useMutation(follow);
}