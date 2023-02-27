import { isTokenExpired, readAccessToken } from "src/lib/auth/helpers";
import refreshAccessToken from "src/lib/auth/refreshAccessToken";

// Lens graphql server endpoint
const endpoint = "https://api-mumbai.lens.dev";
//const endpoint = "https://api.lens.dev"
export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {

  async function getAccessToken(){
    const token = readAccessToken();

    if(!token){
      return null;
    }

    let accessToken = token.accessToken;

    if (isTokenExpired(token.exp)){
      const newToken = await refreshAccessToken();

      if(!newToken) return null;

      accessToken = newToken;
    }

    return accessToken;
  }


  return async () => {

    const token = typeof window!== "undefined" ? await getAccessToken(): null;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options,
        //authentication headers
        "x-access-token": token ? token : "",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        query,
        variables
      })
    })
 
    const json = await res.json()
 
    if (json.errors) {
      const { message } = json.errors[0] || {}
      throw new Error(message || 'Error…')
    }
 
    return json.data
  }
}