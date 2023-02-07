import React from "react";
import {
  Flex,
  Text,
  Container,
  Box,
  Avatar,
  Image,
  useDisclosure,
  Button,
  Input,
  Collapse,
} from "@chakra-ui/react";

import MyProfileNFTs from "@components/MyProfileNFTs";
import UploadForm from "@components/UploadForm";

const MyProfile: React.FC = () => {
  return (
    <Container
      maxWidth={{ base: "100%", md: "90%" }}
      my={12}
      marginLeft={{ base: "none", md: "240px" }}
      // marginTop={"80px"}
      height={{ base: "auto", md: "auto" }}
      width={"100vw"}
    >
      <Box
        width="100vw"
        bgColor="brand.darkBlue"
        bgImage="url('/images/home-blur-bg.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="repeat"
        zIndex={-2}
        position="absolute"
        top={"220px"}
        minHeight={{ base: "1000px", sm: "900px", lg: "3000px" }}
        backgroundBlendMode="mutiply"
      ></Box>
      <Flex flexDirection={"column"} color={"white"}>
        {/* Profile Top */}
        <Box
          width={"full"}
          height={"400px"}
          display={"flex"}
          bgImage="url('/images/profile-bg.svg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="repeat"
          position={"relative"}
        >
          <Box
            position={"absolute"}
            bottom={"30px"}
            left={"35px"}
            color={"white"}
            padding={"5px"}
          >
            <Flex flexDirection={"column"} gap={"10"}>
              <Box display={"flex"} gap={"10"} alignItems={"center"}>
                <Avatar src="/images/profile-pic.svg" size={"xl"} />
                <Box>
                  <Text fontSize={"xl"} fontWeight={"500"}>
                    Michaelangelo.lens
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    0x9ee..599{" "}
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection={"row"} gap={"10"}>
                <Box>
                  <Text color={"gray.300"}>Followers</Text>
                  <Text fontSize={"xl"} fontWeight={"500"}>
                    1,212
                  </Text>
                </Box>
                <Box>
                  <Text color={"gray.300"}>No. of Videos</Text>
                  <Text fontSize={"xl"} fontWeight={"500"}>
                    5
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
          <Box position={"absolute"} top={"400px"} left={"35px"}>
            {/* Upload Video Form */}
            <UploadForm />
            <MyProfileNFTs />
          </Box>
        </Box>

        {/* Earning and Statics*/}
      </Flex>
    </Container>
  );
};

export default MyProfile;
