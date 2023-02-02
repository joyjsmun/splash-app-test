import React from "react";
import {
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Container,
  Box,
} from "@chakra-ui/react";
import Card from "./Card";

const Problem: React.FC = () => {
  return (
    <Flex direction="column" py={15}>
      <Stack pt={10} align={"center"}>
        <Text color="brand.brightBlue" as="b">
          Our Vision
        </Text>
        <Text color="white" fontSize="3xl" as="b">
          Problem We Solve
        </Text>
      </Stack>
      <Card />
    </Flex>
  );
};

export default Problem;
