import React, { useState } from "react";
import {
  useProfileQuery,
  usePublicationsQuery,
} from "../../src/graphql/generated";

import { useRouter } from "next/router";
import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import FeedPost from "../../components/FeedPost";
import { LENS_HUB_CONTRACT_ADDRESS, LENS_HUB_ABI } from "src/const/contracts";
import { useFollow } from "src/lib/useFollow";

type Props = {};

export default function ProfilePage({}: Props) {
  const router = useRouter();
  // Grab the path / [id] field from the URL
  const { id } = router.query;
  const { mutateAsync: followUser } = useFollow();
  const [followSuccessMessage, setFollowSuccessMessage] = useState("");

  const {
    isLoading: loadingProfile,
    data: profileData,
    error: profileError,
  } = useProfileQuery(
    {
      request: {
        handle: id,
      },
    },
    {
      enabled: !!id,
    }
  );

  const {
    isLoading: isLoadingPublications,
    data: publicationsData,
    error: publicationsError,
  } = usePublicationsQuery(
    {
      request: {
        profileId: profileData?.profile?.id,
      },
    },
    {
      enabled: !!profileData?.profile?.id,
    }
  );

  if (publicationsError || profileError) {
    return <div>Could not find this profile.</div>;
  }

  if (loadingProfile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <div>
        {/* Cover Image */}
        {/* @ts-ignore */}
        {profileData?.profile?.coverPicture?.original?.url && (
          <MediaRenderer
            // @ts-ignore
            src={profileData?.profile?.coverPicture?.original?.url || ""}
            alt={
              profileData?.profile?.name || profileData?.profile?.handle || ""
            }
          />
        )}
        {/* Profile Picture */}
        {/* @ts-ignore */}
        {profileData?.profile?.picture?.original?.url && (
          <MediaRenderer
            // @ts-ignore
            src={profileData.profile.picture.original.url}
            alt={profileData.profile.name || profileData.profile.handle || ""}
          />
        )}

        {/* Profile Name */}
        <h1>{profileData?.profile?.name || "Anon User"}</h1>
        {/* Profile Handle */}
        <p>@{profileData?.profile?.handle || "anonuser"}</p>

        {/* Profile Description */}
        <p>{profileData?.profile?.bio}</p>
        <p>
          {profileData?.profile?.stats.totalFollowers}
          {"Followers"}
        </p>
        <Web3Button
          contractAddress={LENS_HUB_CONTRACT_ADDRESS}
          contractAbi={LENS_HUB_ABI}
          action={async () => {
            await followUser(profileData?.profile?.id);
            setFollowSuccessMessage("Successfully followed the user.");
          }}
        >
          Follow
        </Web3Button>
        {followSuccessMessage && <p>{followSuccessMessage}</p>}
      </div>
    </div>
  );
}
