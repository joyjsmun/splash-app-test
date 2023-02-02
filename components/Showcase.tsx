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
    <Container maxW="7xl" centerContent>
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        color="white"
        justify="center"
        align="center"
        px={12}
        pb={10}
      >
        <Flex direction="column" gap={3}>
          <Heading lineHeight={"1.5em"} py={6} size={"2xl"}>
            Earn interest by watching content you love
          </Heading>
          <Text fontSize={"xl"}>Get rewarded for your time and attention</Text>
          <Flex align="center" my={6} gap={6}>
            <Button
              textTransform="uppercase"
              backgroundColor="brand.darkBlue"
              borderColor="#2D293D"
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
            {/* <Flex direction="row">
              <Image src="/images/Frame.svg" />
              <Link href="/" textTransform="uppercase" color="brand.brightBlue">
                Discover
              </Link>
            </Flex> */}
          </Flex>
        </Flex>
        <Flex>
          <Image objectFit="cover" src="/images/showcase-illustration.svg" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Showcase;
