import React from "react";
import {
  Text,
  Stack,
  Box,
  Flex,
  Container,
  Heading,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
import TrendingVideos from "./TrendingVideos";

export default function TrendingVideoSection(props: any) {
  return (
    <Container maxWidth={{ base: "90%", md: "90%" }}>
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
        <TrendingVideos />
      </Flex>
    </Container>
  );
}
