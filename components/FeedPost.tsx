import React from "react";
import { ExplorePublicationsQuery } from "src/graphql/generated";
import { MediaRenderer } from "@thirdweb-dev/react";
import { Avatar } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  publication: ExplorePublicationsQuery["explorePublications"]["items"][0];
};

export default function FeedPost({ publication }: Props) {
  return (
    <div>
      {/* Lens Profile Picture */}
      <Avatar size={"sm"}>
        <MediaRenderer
          //@ts-ignore
          src={publication?.profile?.picture?.original?.url || ""}
          alt={publication.profile.name || publication.profile.handle}
        />
      </Avatar>
      {/* Lens Profile Name */}
      <div>{publication.profile.name || publication.profile.handle}</div>
      {/* Lens Post name */}
      <Link href={`/profile/${publication.profile.handle}`}>
        {publication.metadata.name}
      </Link>
      {/* Description of the post */}
      <div>{publication.metadata.content}</div>
      {/* Lens Media feed */}
      {publication.metadata.media?.length > 0 && (
        <MediaRenderer
          src={publication.metadata.media[0].original.url}
          alt={publication.metadata.name || ""}
        />
      )}
      {/* Total of Stats */}
      <div>{publication.stats.totalAmountOfComments}</div>
    </div>
  );
}

// https://docs.lens.xyz/docs/profile-feed#api-design
// "media": [
//     {
//       "original": {
//         "url": "https://arweave.net/p232ty-xtV2WlVocCfrakKi5lCPtVv3iR9ULnhyT_bY",
//         "mimeType": "video/mp4"
//       }
//     }
//   ]
