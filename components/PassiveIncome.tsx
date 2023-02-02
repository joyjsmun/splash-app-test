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
  Button,
} from "@chakra-ui/react";
import Card from "./Card";

const PassiveIncome: React.FC = () => {
  return (
    <Container maxW={"5xl"} py={10} textAlign={"center"}>
      <Flex direction="column" py={20}>
        <Box>
          <Text color="white" fontSize="3xl" as="b">
            Are you tired of just passively consuming content without any return
            on your investment?
          </Text>
          <Text textAlign={"center"} color="gray.300" fontWeight={500} py={10}>
            Don't miss out on the opportunity to earn passive income while
            enjoying the content you love. Join us now and start earning as you
            watch.
          </Text>
          <Button
            alignContent={"center"}
            textColor={"white"}
            textTransform="uppercase"
            backgroundColor="brand.darkBlue"
            borderColor="gray.100"
            borderWidth={1}
            borderRadius={3}
            px={6}
            py={3}
            _hover={{
              backgroundColor: "brand.darkBlue",
              opacity: 0.7,
            }}
          >
            Join the Club
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default PassiveIncome;
