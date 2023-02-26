import { ChallengeQuery, ChallengeQueryVariables,ChallengeDocument } from "src/graphql/generated"
import { fetcher } from "src/graphql/auth-fetcher"

export default async function generatChallenge(address:string){
    return await fetcher<ChallengeQuery, ChallengeQueryVariables>(ChallengeDocument, {
        request:{
            address,
        }
    })();
}