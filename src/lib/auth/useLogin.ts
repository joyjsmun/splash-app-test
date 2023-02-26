import { useMutation } from "@tanstack/react-query";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { useAuthenticateMutation } from "src/graphql/generated";
import generatChallenge from "./GenerateChallenge";

export default function useLogin() {
    const address = useAddress();
    const sdk = useSDK();
    const {mutateAsync: sendSignedMessage} = useAuthenticateMutation();
    
    async function login() {
        if(!address) return;

        // 1.generate challenge from the lens API
        const {challenge} = await generatChallenge(address);

        // 2.sign challenge with the user's wallet private key
        const signature = await sdk?.wallet.sign(challenge.text);

        // 3.send challenge to the lens API
        const {authenticate} = await sendSignedMessage({
            request: {
               address,
                signature
            }
    });

    console.log(
        "authenticate:",authenticate
    )


}

    return useMutation(login)

}