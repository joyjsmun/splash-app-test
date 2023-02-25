import { Container } from "@chakra-ui/react";
import React from "react";
import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "src/graphql/generated";

const Lens: React.FC = () => {
  const { data, isLoading, error } = useExplorePublicationsQuery({
    request: {
      sortCriteria: PublicationSortCriteria.TopCollected,
    },
  });

  console.log({
    isLoading,
    error,
    data,
  });
  return (
    <Container>
      <h1>Test</h1>
    </Container>
  );
};

export default Lens;
