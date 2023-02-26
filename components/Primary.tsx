import React from "react";
import { Container } from "@chakra-ui/react";
import Showcase from "./Showcase";
import Leaderboard from "./Leaderboard";
import RecomendedVideoSection from "./RecomendedVideoSection";
import TrendingVideoSection from "./TrendingVideoSection";
import PopularCreatorSection from "./PopularCreatorSection";
import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "src/graphql/generated";
import Lens from "pages/Lens";

const Primary: React.FC = () => {
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
    <Container
      centerContent
      maxWidth={"100%"}
      my={12}
      marginLeft={{ base: "none", md: "200px" }}
      // marginTop={"80px"}
      height={{ base: "auto", md: "auto" }}
      width={"90vw"}
    >
      <Showcase />
      <Lens />
      <Leaderboard />
      <RecomendedVideoSection mainTitle="Recommended Videos" />
      <TrendingVideoSection mainTitle="Treanding Videos" />
      <PopularCreatorSection mainTitle="Popular Creator" />
    </Container>
  );
};

export default Primary;
