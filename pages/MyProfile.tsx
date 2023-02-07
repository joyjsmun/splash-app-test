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
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  Avatar,
} from "@chakra-ui/react";

import MyProfileOverview from "@components/MyProfileOverview";
// import MyProfileNFTs from "@components/MyProfileNFTs";
import MyProfileActivity from "@components/MyProfileActivity";

const MyProfile: React.FC = () => {
  return (
    <Container
      maxWidth={{ base: "unset", md: "85%" }}
      my={12}
      marginLeft={{ base: "none", md: "240px" }}
      // marginTop={"80px"}
      height={{ base: "auto", md: "auto" }}
      width={"100vw"}
    >
      <Flex flexDirection={"column"} color={"white"}>
        {/* Profile Top */}
        <Box
          width={"full"}
          height={{ base: "230px", md: "400px" }}
          display={"flex"}
          bgImage="url('/images/profile-bg.svg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="repeat"
          position={"relative"}
        >
          <Box
            position={"absolute"}
            bottom={"50px"}
            left={"35px"}
            width={"130px"}
            color={"white"}
            padding={"5px"}
          >
            <Box display={"flex"} gap={"10"} alignItems={"center"}>
              <Avatar src="/images/profile-avatar.svg" size={"2xl"} />
              <Box>
                <Text fontSize={"2xl"} fontWeight={"500"}>
                  poolneo.lens
                </Text>
                <Text fontSize={"2xl"} color={"gray.400"}>
                  0xe28...28
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

        <Tabs marginTop={"10"}>
          <TabList>
            <Tab fontWeight={"600"} fontSize={"lg"}>
              Overview
            </Tab>
            {/* <Tab fontWeight={"600"} fontSize={"lg"}>
              NFTs
            </Tab> */}
            <Tab fontWeight={"600"} fontSize={"lg"}>
              Activity
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <MyProfileOverview />
            </TabPanel>
            {/* <TabPanel>
              <MyProfileNFTs />
            </TabPanel> */}
            <TabPanel>
              <MyProfileActivity />
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Earning and Statics*/}
      </Flex>
    </Container>
  );
};

export default MyProfile;
