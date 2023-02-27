import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import { use } from "react";
import { useAuthenticateMutation } from "src/graphql/generated";
import generatChallenge from "./generateChallenge";
import { setAccessToken } from "./helpers";

export default function useLogin() {
    const address = useAddress();
    const sdk = useSDK();
    const {mutateAsync: sendSignedMessage} = useAuthenticateMutation();
    const client = useQueryClient();
    
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

    console.log("authenticate:",authenticate);

    const {accessToken,refreshToken} = authenticate;

    setAccessToken(accessToken,refreshToken);

    //refetch the cache key(["lens-user",address]) for showing the lens profile
    client.invalidateQueries(["lens-user",address]);
    }

    return useMutation(login)

}