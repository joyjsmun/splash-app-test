import { Box, Center, Flex } from "@chakra-ui/react";
import Creator from "./Creator";

export default function CreatorList() {
  return (
    <Flex
      py="10"
      flexDirection={"row"}
      justifyContent={"space-between"}
      paddingTop={"30px"}
      gap={{ base: "10px", md: "10" }}
    >
      <Creator
        cretorImage="/images/creator-1.svg"
        creatorName="Binary Boost"
        followers="479,201"
      />
      <Creator
        cretorImage="/images/creator-2.svg"
        creatorName="Binary Boost"
        followers="479,201"
      />
      <Creator
        cretorImage="/images/creator-3.svg"
        creatorName="Binary Boost"
        followers="479,201"
      />
      <Creator
        cretorImage="/images/creator-4.svg"
        creatorName="Binary Boost"
        followers="479,201"
      />
      <Creator
        cretorImage="/images/creator-5.svg"
        creatorName="Binary Boost"
        followers="479,201"
      />
    </Flex>
  );
}
