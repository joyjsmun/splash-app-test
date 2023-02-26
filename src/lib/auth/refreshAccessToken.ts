import { fetcher } from "src/graphql/auth-fetcher";
import { RefreshDocument, RefreshMutation, RefreshMutationVariables } from "src/graphql/generated";
import { readAccessToken, setAccessToken } from "./helpers"

export default async function refreshAccessToken() {
      // 1. get the current access token from the local storage
    const currentRefreshToken = readAccessToken()?.refreshToken;
    if(!currentRefreshToken) return null;

    // 2. ask the lens server to refresh the access token
    const result = await fetcher<RefreshMutation, RefreshMutationVariables>(RefreshDocument, {
        request:{
            refreshToken:currentRefreshToken
        }
    })();


    const {accessToken, refreshToken:newRefreshToken} = result.refresh;
    setAccessToken(accessToken,newRefreshToken);

    return accessToken as string;
      
}