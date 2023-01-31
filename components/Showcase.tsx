import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Container,
  Box,
} from "@chakra-ui/react";

const Showcase: React.FC = () => {
  return (
    <Flex
      direction={{ base: "column-reverse", lg: "row" }}
      color="white"
      justify="center"
      align="center"
      px={12}
    >
      <Flex direction="column" gap={3}>
        <Heading>Earn interest by watching content you love</Heading>
        <Text>Get rewarded for your time and attention</Text>
        <Flex align="center" my={6} gap={6}>
          <Button
            textTransform="uppercase"
            backgroundColor="brand.darkBlue"
            borderColor="#2D293D"
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
          <Link href="/" textTransform="uppercase" color="brand.brightBlue">
            Discover
          </Link>
        </Flex>
      </Flex>
      <Image src="/images/showcase-illustration.svg" />
    </Flex>
  );
};

export default Showcase;
