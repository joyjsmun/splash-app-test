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
import FeedPost from "./FeedPost";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Errors...</div>;
  }

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
      {/* Iterate over here */}
      {data?.explorePublications.items.map((publication) => (
        <FeedPost key={publication.id} publication={publication} />
      ))}
      <Leaderboard />
      <RecomendedVideoSection mainTitle="Recommended Videos" />
      <TrendingVideoSection mainTitle="Treanding Videos" />
      <PopularCreatorSection mainTitle="Popular Creator" />
    </Container>
  );
};

export default Primary;
