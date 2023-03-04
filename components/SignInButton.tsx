import React from "react";
import {
  useAddress,
  useNetworkMismatch,
  useNetwork,
  ChainId,
  ConnectWallet,
  MediaRenderer,
} from "@thirdweb-dev/react";
import useLenseUser from "src/lib/auth/useLensUser";
import useLogin from "src/lib/auth/UseLogin";

type Props = {};

export default function SignInButton({}: Props) {
  const address = useAddress();
  const isWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();
  const { isSignedInQuery, profileQuery } = useLenseUser();
  const { mutate: requestLogin } = useLogin();

  // 1. connect wallet
  if (!address) return <ConnectWallet />;
  // 2. switch network
  if (isWrongNetwork) {
    return (
      <button onClick={() => switchNetwork?.(ChainId.Polygon)}>
        Switch Network
      </button>
    );
  }

  if (isSignedInQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSignedInQuery.data) {
    return (
      <button onClick={() => requestLogin()}>Sign In With Lens Profile</button>
    );
  }

  if (profileQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (!profileQuery.data?.defaultProfile) {
    return <div>No Lens Profile</div>;
  }

  if (profileQuery.data?.defaultProfile) {
    return (
      <div>
        <MediaRenderer
          // @ts-ignore
          src={profileQuery?.data?.defaultProfile?.picture?.original?.url || ""}
          alt={profileQuery.data.defaultProfile.name || ""}
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
          }}
        />
        {profileQuery.data.defaultProfile.name || ""}
      </div>
    );
  }

  return (
    <div>
      <div>Something Went wrong!!</div>
    </div>
  );
}
