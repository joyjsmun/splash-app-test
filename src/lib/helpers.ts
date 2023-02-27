import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { EIP712Domain } from "@thirdweb-dev/sdk/dist/declarations/src/evm/common/sign";
import { ethers } from "ethers";
import omitDeep from "omit-deep";

export function omitTypename(object:any){
    return omitDeep(object,["__typename"]);
}


export async function signTypedDataWithOmmitted_TypeName(
    sdk:ThirdwebSDK,
    domain:EIP712Domain,
    types:Record<string, any>,
    value:Record<string, any>
){
    // signing using the SDK
   return await sdk.wallet.signTypedData(
        omitTypename(domain) as EIP712Domain,
        omitTypename(types) as Record<string, any>,
        omitTypename(value) as Record<string, any>
    )
}

// signature to extract 'v','r','s'
export function splitSigature(signature:string){

    return ethers.utils.splitSignature(signature)

}