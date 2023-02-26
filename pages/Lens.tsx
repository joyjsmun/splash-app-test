import { Container } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import React from "react";
import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "src/graphql/generated";
import useLogin from "src/lib/auth/UseLogin";

const Lens: React.FC = () => {
  const address = useAddress();
  const { mutate: requestLogin } = useLogin();

  if (!address) {
    return <ConnectWallet />;
  }

  return <button onClick={() => requestLogin()}>Login</button>;
};

export default Lens;
