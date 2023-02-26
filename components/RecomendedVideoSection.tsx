import React from "react";
import { Text, Flex, Container, Button, Image } from "@chakra-ui/react";
import Card from "./Video";
import RecomendedVideos from "./RecomendedVideos";
import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "src/graphql/generated";
import FeedPost from "./FeedPost";

export default function RecomendedVideoSection(props: any) {
  const { data, isLoading, error } = useExplorePublicationsQuery({
    request: {
      sortCriteria: PublicationSortCriteria.TopCollected,
    },
  });
  // console.log({
  //   isLoading,
  //   error,
  //   data,
  // });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Errors...</div>;
  }
  return (
    <Container maxWidth={{ base: "90%", md: "90%" }} marginTop={"20"}>
      <Flex flexDirection={"row"} justifyContent={"space-between"}>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"500"}
          color={"brand.lightPurple"}
        >
          {props.mainTitle}
        </Text>
        <Flex gap={"15px"}>
          <Button
            borderWidth={"1px"}
            borderColor={"gray.300"}
            color={"white"}
            background={"none"}
          >
            <Image src="/images/left arrow.svg" />
          </Button>
          <Button
            borderWidth={"1px"}
            borderColor={"gray.300"}
            color={"white"}
            background={"none"}
          >
            <Image src="/images/right arrow.svg" />
          </Button>
        </Flex>
      </Flex>
      <Flex paddingTop={"none"}>
        {/* Iterate over here ->> need to fix */}
        {/* {data?.explorePublications.items.map((publication) => (
          <FeedPost key={publication.id} publication={publication} />
        ))} */}
        <RecomendedVideos />
      </Flex>
    </Container>
  );
}
