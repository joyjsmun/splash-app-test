import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Image,
  Container,
  Avatar,
  Box,
} from "@chakra-ui/react";

import { ViewIcon } from "@chakra-ui/icons";

const Showcase: React.FC = () => {
  return (
    <Container
      centerContent
      maxWidth={"100%"}
      marginTop={{ base: "0px", md: "-5px" }}
      bg={"gray.600"}
      height={{ base: "600px", md: "730px" }}
      mb={{ base: "none", md: "100px" }}
      ml={{ base: "unset", md: "100px" }}
      background="url('/images/showcase-image2.svg')"
      bgSize="cover"
      width={"100vw"}
      marginBottom={{ base: "20px", md: "100px" }}
    >
      <Flex
        direction={{ base: "column-reverse", md: "column" }}
        color="white"
        align="flex-start"
        px={12}
        pb={10}
        position={{ base: "unset", md: "relative" }}
      >
        <Flex
          direction="column"
          gap={3}
          justify={{ base: "center", md: "flex-start" }}
          position={{ base: "unset", md: "relative" }}
          pt={{ base: "100px" }}
          top="100px"
          width={{ base: "80vw", md: "70vw" }}
        >
          <Box
            bg={"gray.700"}
            borderRadius={"16px"}
            maxWidth={"70px"}
            fontSize={"lg"}
            padding="1"
            color={"white"}
            fontWeight={"500"}
            textAlign={"center"}
          >
            14:55
          </Box>
          <Heading
            lineHeight={"1.3em"}
            pb={6}
            size={{ base: "xl", md: "2xl" }}
            width={{ base: "100%", md: "95%" }}
            mb={{ base: "10" }}
          >
            Space-Based Blockchain: The Possibilities of Decentralized Systems
            in the Final Frontier{" "}
          </Heading>
          <Flex
            flexDirection={{ base: "row", md: "row" }}
            gap="15px"
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={"semibold"}
          >
            <Avatar
              size="xs"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Text>Justin B</Text>
            <Text>|</Text>
            <ViewIcon display={"flex"} alignSelf={"center"} width={"5"} />
            <Text>1.2M Views</Text>
            <Text>|</Text>
            <Text>6 days ago</Text>
          </Flex>
          <Flex
            align="center"
            my={{ base: "10", md: "0" }}
            gap={6}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Button
              textTransform="uppercase"
              backgroundColor="brand.purple"
              borderRadius={"12px"}
              width={"216px"}
              height={"48px"}
              px={6}
              py={3}
              _hover={{
                backgroundColor: "brand.darkBlue",
                opacity: 0.7,
              }}
            >
              <Image src="/images/play.svg" paddingRight={"2"} />
              Play
            </Button>
            <Flex color="white" flexDirection={"column"} gap={"2"}>
              <Text fontSize={"lg"} fontWeight={"semibold"}>
                Expected Earning
              </Text>
              <Flex
                width={"100px"}
                flexDirection={"row"}
                gap={"10px"}
                justifyContent={{ base: "center" }}
              >
                <Image
                  width={{ base: "5", md: "7" }}
                  src="/images/splash-token.svg"
                />
                <Text fontSize={"lg"} fontWeight={"semibold"}>
                  30
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Showcase;
