const STORAGE_KEY = 'LH_STORAGE_KEY';

// check whether the access token is expired or not
export function isTokenExpired(exp:number) {
    if(!exp) return true;

    if(Date.now() >= exp * 1000) {
        // not expired
        return false;
    }
    // no longer valid => need to get a new one
    return true;
}

// 1. Reading
export function readAccessToken(){
    if(typeof window == "undefined") return null;
    const ls = localStorage || window.localStorage;

    if(!ls){
        throw new Error('No localStorage');
    }


    const data = ls.getItem(STORAGE_KEY);

    if(!data){
        return null;
    }

    return  JSON.parse(data) as{
        accessToken: string,
        exp: number,
        refreshToken: string,
        }
}

// 2. Setting access token in the local storage

export function setAccessToken(   accessToken: string,
    refreshToken : string){
        //parse jwt token to get the expiration time
        const {exp} = parseJwt(accessToken);
        //set all three variables in the local storage
        const ls = localStorage || window.localStorage;

        if(!ls){
            throw new Error('localStorage is not available');
        }

        ls.setItem(STORAGE_KEY, JSON.stringify({accessToken, refreshToken, exp}));
        
}

// 3. Extracting the expiration time field
function parseJwt(token: string) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  
    return JSON.parse(jsonPayload);
  }