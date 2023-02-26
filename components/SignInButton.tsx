import React from "react";
import {
  useAddress,
  useNetworkMismatch,
  useNetwork,
  ChainId,
  ConnectWallet,
} from "@thirdweb-dev/react";

type Props = {};

export default function SignInButton({}: Props) {
  const address = useAddress();
  const isWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // 1. connect wallet
  if (!address) return <ConnectWallet />;
  // 2. switch network
  if (isWrongNetwork)
    return (
      <button onClick={() => switchNetwork?.(ChainId.Polygon)}>
        Switch Network
      </button>
    );
}
