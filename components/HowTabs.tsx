import React from "react";
import {
  Flex,
  Text,
  Box,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const HowTabs: React.FC = () => {
  return (
    <Flex direction="column" pt={7}>
      <Tabs variant="soft-rounded">
        <TabList gap={2} display={"flex"} justifyContent={"center"} pb={10}>
          <Tab _selected={{ color: "white", bg: "brand.brightBlue" }}>
            Viewers
          </Tab>
          <Tab _selected={{ color: "white", bg: "brand.brightBlue" }}>
            Creators
          </Tab>
        </TabList>

        <TabPanels>
          {/* Viewer */}
          <TabPanel display={"flex"} justifyContent={"center"}>
            <Flex direction={"column"} gap={20}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                <GridItem display={"flex"} justifyContent={"center"} py={10}>
                  <Image width={"15em"} src="/images/viewer_icon1.svg" />
                </GridItem>

                <GridItem px={"10"} pt={"10"}>
                  <Image
                    pt={3}
                    src="/images/number1.png"
                    width={"4em"}
                    mx={{ base: "auto", lg: 0 }}
                  />
                  <Heading
                    fontSize={"xl"}
                    color="white"
                    fontWeight={600}
                    py={7}
                  >
                    Watch a Video{" "}
                  </Heading>
                  <Text color={"brand.gray"}>
                    Enjoy your favourite content and earn at the same time.
                  </Text>
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                <GridItem display={"flex"} justifyContent={"center"} py={10}>
                  <Image width={"15em"} src="/images/viewer_icon2.svg" />
                </GridItem>

                <GridItem px={"10"} pt={"10"}>
                  <Image
                    pt={3}
                    src="/images/number2.png"
                    width={"4em"}
                    mx={{ base: "auto", lg: 0 }}
                  />
                  <Heading
                    fontSize={"xl"}
                    color="white"
                    fontWeight={600}
                    py={7}
                  >
                    Earn tokens every second{" "}
                  </Heading>
                  <Text color={"brand.gray"}>
                    Maximize your earnings by watching more content from your
                    favourite creators.{" "}
                  </Text>
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                <GridItem display={"flex"} justifyContent={"center"} py={10}>
                  <Image width={"15em"} src="/images/viewer_icon3.svg" />
                </GridItem>

                <GridItem px={"10"} pt={"10"}>
                  <Image
                    pt={3}
                    src="/images/number3.png"
                    width={"4em"}
                    mx={{ base: "auto", lg: 0 }}
                  />
                  <Heading
                    fontSize={"xl"}
                    color="white"
                    fontWeight={600}
                    py={7}
                  >
                    Track your earnings{" "}
                  </Heading>
                  <Text color={"brand.gray"}>
                    Keep track of how much you've earned and withdraw anytime.{" "}
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
          </TabPanel>
          {/* Creator */}
          <TabPanel display={"flex"} justifyContent={"center"}>
            <Flex direction={"column"} gap={20}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                <GridItem display={"flex"} justifyContent={"center"} py={10}>
                  <Image
                    width={"15em"}
                    src="/images/creator_icon1.svg"
                    mx={{ base: "auto", lg: 0 }}
                  />
                </GridItem>

                <GridItem px={"10"} pt={"10"}>
                  <Image pt={3} src="/images/number1.png" width={"4em"} />
                  <Heading
                    fontSize={"xl"}
                    color="white"
                    fontWeight={600}
                    py={7}
                  >
                    Upload a Video{" "}
                  </Heading>
                  <Text color={"brand.gray"}>
                    Share your creativity and reach a wider audience.{" "}
                  </Text>
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                <GridItem display={"flex"} justifyContent={"center"} py={10}>
                  <Image
                    width={"15em"}
                    src="/images/creator_icon2.svg"
                    mx={{ base: "auto", lg: 0 }}
                  />
                </GridItem>

                <GridItem px={"10"} pt={"10"}>
                  <Image pt={3} src="/images/number2.png" width={"4em"} />
                  <Heading
                    fontSize={"xl"}
                    color="white"
                    fontWeight={600}
                    py={7}
                  >
                    Earn tokens for the video uploaded{" "}
                  </Heading>
                  <Text color={"brand.gray"}>
                    Monetize your content and grow your income.
                  </Text>
                </GridItem>
              </Grid>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                <GridItem display={"flex"} justifyContent={"center"} py={10}>
                  <Image
                    width={"15em"}
                    src="/images/creator_icon3.svg"
                    mx={{ base: "auto", lg: 0 }}
                  />
                </GridItem>

                <GridItem px={"10"} pt={"10"}>
                  <Image pt={3} src="/images/number3.png" width={"4em"} />
                  <Heading
                    fontSize={"xl"}
                    color="white"
                    fontWeight={600}
                    py={7}
                  >
                    Automatically reward your viewers{" "}
                  </Heading>
                  <Text color={"brand.gray"}>
                    Show your appreciation for your viewers' support.{" "}
                  </Text>
                </GridItem>
              </Grid>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default HowTabs;
