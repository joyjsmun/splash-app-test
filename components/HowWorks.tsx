import React from "react";
import { Flex, Heading, Text, Stack, Button, Box } from "@chakra-ui/react";
import HowTabs from "./HowTabs";

const HowWorks: React.FC = () => {
  return (
    <Flex direction="column" backgroundColor={"#0E0D37"}>
      <Stack pt={10} align={"center"}>
        <Text color="brand.brightBlue" as="b">
          In a Nutshell
        </Text>
        <Text color="white" fontSize="3xl" as="b">
          How Splash Works
        </Text>
      </Stack>
      <HowTabs />
    </Flex>
  );
};

export default HowWorks;
