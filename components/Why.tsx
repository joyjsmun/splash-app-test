import React from "react";
import {
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Container,
  Box,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import Card from "./Card";

const Why: React.FC = () => {
  return (
    <Flex direction="column" py={20}>
      <Grid px={"15%"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          py={10}
          backgroundColor={"yellow"}
          borderRadius={"2xl"}
          bgGradient="linear(to-r,#251D5E, brand.purple)"
          px={10}
        >
          <GridItem py="10">
            <Image src="/images/rocket.svg" />
          </GridItem>
          <GridItem py="10">
            <Box display={"flex"} flexDirection={"column"} pt={5} pb={10}>
              <Text color="brand.brightBlue" as="b">
                Why Splash
              </Text>
              <Text color="white" fontSize="3xl" as="b">
                Earn Every Second
              </Text>
              <Text color="white" fontSize="3xl" as="b">
                $10,000,000
              </Text>

              <Text color="white" pt={10}>
                Earn 7% per year on all the money you are depositing in Alluo.
                Interest accrues in real time and you can withdraw at any time.
                There are no hidden fees, no minimum balances, and no reason to
                wait.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default Why;
