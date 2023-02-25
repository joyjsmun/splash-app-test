import React from "react";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Text,
  Stack,
  Box,
  Flex,
  Container,
  Heading,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
const Leaderboard: React.FC = () => {
  return (
    <Container
      maxWidth={{ base: "88%", md: "85%" }}
      flexDirection={"column"}
      borderRadius={"12"}
      background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
      backdrop-filter="blur(2px)"
      paddingBottom={"4"}
      marginBottom={{ base: "unset", md: "100px" }}
    >
      <Flex paddingTop={"10"} paddingX={"10"} justifyContent={"space-between"}>
        <Text fontSize={"3xl"} fontWeight={"500"} color={"brand.lightPurple"}>
          Leaderboard
        </Text>
        <Box
          color={"white"}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Button borderRadius={"20px"} backgroundColor={"brand.purple "}>
            24h
          </Button>
          <Button background={"none"} borderRadius={"20px"}>
            7d
          </Button>
          <Button background={"none"} borderRadius={"20px"}>
            All
          </Button>
        </Box>
      </Flex>

      <TableContainer
        display={"flex"}
        padding="10"
        paddingRight={"10"}
        color={"white"}
        border="none"
      >
        <Table variant="unstyled">
          <Thead>
            <Tr backgroundColor="rgba(250, 250, 250, 0.05)">
              <Th width={"14%"} fontSize={"sm"}>
                Rank
              </Th>
              <Th width={"28%"} fontSize={"sm"}>
                User
              </Th>
              <Th width={"18%"} fontSize={"sm"}>
                Total Earnings
              </Th>
              <Th width={"20%"} fontSize={"sm"}>
                Videos Watched
              </Th>
              <Th width={"20%"} fontSize={"sm"}>
                Duration Watched
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Flex gap={"5"}>
                  <p>1</p>
                  <Image src="/images/Polygon 1.svg" />
                </Flex>
              </Td>

              <Td>
                <Flex alignContent={"center"} gap={"4"}>
                  <Image src="/images/nft-avatar-1.svg" />
                  <Flex alignItems={"center"}>holog.lens</Flex>
                </Flex>
              </Td>
              <Td>
                <Flex gap={"2"} alignItems={"center"}>
                  <Image
                    src="/images/splash-token.svg"
                    width={{ base: "5", md: "7" }}
                  />
                  <p>9,883</p>
                </Flex>
              </Td>
              <Td>894</Td>
              <Td>30h 25m</Td>
            </Tr>
            <Tr background="rgba(14, 13, 55, 0.3)">
              <Td>
                <Flex gap={"5"}>
                  <p>2</p>
                  <Image src="/images/Polygon 2.svg" />
                </Flex>
              </Td>
              <Td>
                <Flex alignContent={"center"} gap={"4"}>
                  <Image src="/images/nft-avatar-4.svg" />
                  <Flex alignItems={"center"}>glitch.lens</Flex>
                </Flex>
              </Td>
              <Td>
                <Flex gap={"2"} alignItems={"center"}>
                  <Image
                    src="/images/splash-token.svg"
                    width={{ base: "5", md: "7" }}
                  />
                  <p>9,883</p>
                </Flex>
              </Td>
              <Td>894</Td>
              <Td>30h 25m</Td>
            </Tr>
            <Tr>
              <Td>
                <Flex gap={"5"}>
                  <p>3</p>
                  <Image src="/images/Polygon 3.svg" />
                </Flex>
              </Td>
              <Td>
                <Flex alignContent={"center"} gap={"4"}>
                  <Image src="/images/nft-avatar-3.svg" />
                  <Flex alignItems={"center"}>averyy.lens</Flex>
                </Flex>
              </Td>
              <Td>
                <Flex gap={"2"} alignItems={"center"}>
                  <Image
                    src="/images/splash-token.svg"
                    width={{ base: "5", md: "7" }}
                  />
                  <p>9,883</p>
                </Flex>
              </Td>
              <Td>894</Td>
              <Td>30h 25m</Td>
            </Tr>
            <Tr background="rgba(14, 13, 55, 0.3)">
              <Td>
                <Flex gap={"5"}>
                  <p>4</p>
                  <Image src="/images/Polygon 1.svg" />
                </Flex>
              </Td>

              <Td>
                <Flex alignContent={"center"} gap={"4"}>
                  <Image src="/images/nft-avatar-2.svg" />
                  <Flex alignItems={"center"}>doodle.lens</Flex>
                </Flex>
              </Td>
              <Td>
                <Flex gap={"2"} alignItems={"center"}>
                  <Image
                    src="/images/splash-token.svg"
                    width={{ base: "5", md: "7" }}
                  />
                  <p>9,883</p>
                </Flex>
              </Td>
              <Td>894</Td>
              <Td>30h 25m</Td>
            </Tr>
            <Tr>
              <Td>
                <Flex gap={"5"}>
                  <p>5</p>
                  <Image src="/images/Polygon 1.svg" />
                </Flex>
              </Td>

              <Td>
                <Flex alignContent={"center"} gap={"4"}>
                  <Image src="/images/nft-avatar-5.svg" />
                  <Flex alignItems={"center"}>koringer.lens</Flex>
                </Flex>
              </Td>
              <Td>
                <Flex gap={"2"} alignItems={"center"}>
                  <Image
                    src="/images/splash-token.svg"
                    width={{ base: "5", md: "7" }}
                  />
                  <p>9,883</p>
                </Flex>
              </Td>

              <Td>894</Td>
              <Td>30h 25m</Td>
            </Tr>
          </Tbody>
          {/* <Tfoot>
            <Box display={"flex"} gap={"10px"} paddingTop={"6"}>
              <Button
                borderWidth={"1px"}
                borderColor={"gray.300"}
                color={"white"}
                background={"none"}
              >
                <Image src="/images/left arrow.svg" />
              </Button>
              <Button
                borderWidth={"1px"}
                borderColor={"gray.300"}
                color={"white"}
                background={"none"}
              >
                <Image src="/images/right arrow.svg" />
              </Button>
            </Box>
          </Tfoot> */}
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Leaderboard;
