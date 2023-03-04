import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { EIP712Domain } from "@thirdweb-dev/sdk/dist/declarations/src/evm/common/sign";
import { BufferOrStringWithName } from "@thirdweb-dev/storage";
import { ethers } from "ethers";
import omitDeep from "omit-deep";

export function omitTypename(object:any){
    return omitDeep(object,["__typename"]);
}

export async function signTypedDataWithOmmited(
    sdk:ThirdwebSDK,
    domain:EIP712Domain,
    types:Record<string,any>,
    value:Record<string,any>
){
    //sign in using the SDK
    return await sdk.wallet.signTypedData(
        omitTypename(domain) as EIP712Domain,
        omitTypename(types) as Record<string,any>,
        omitTypename(value) as Record<string,any>
    )


}

// split the signature(v,r,s) values
export function splitSignature(signature: string) {
    return ethers.utils.splitSignature(signature);
  }