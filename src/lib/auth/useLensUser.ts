import { useQuery } from "@tanstack/react-query";
import { useAddress } from "@thirdweb-dev/react";
import { readAccessToken } from "./helpers";
import {useDefaultProfileQuery} from "../../graphql/generated"



export default function useLenseUser(){
    const address = useAddress();

    const localStorageQuery = useQuery(["lenseUser", address],
      () => readAccessToken()
    );

    const profileQuery = useDefaultProfileQuery(
        {
        request:{
            ethereumAddress: address,
        }
    },{
            // if address is not undefined, then use query => when adress is available
            enabled: !!address,
        }
    );
    return {
        // localStorage and lens profile information
        isSignedInQuery:localStorageQuery,
        profileQuery:profileQuery
    }

}