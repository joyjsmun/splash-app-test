import {
  Box,
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
  Image,
  Flex,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
import EarningStatics from "../components/EarningStatics";
import EachVideoHistory from "../components/EachVideoHistory";

const Earnings: React.FC = () => {
  return (
    <Container
      maxWidth={"80%"}
      marginTop={"14"}
      marginLeft={{ base: "none", md: "200px" }}
      // marginTop={"80px"}
      height={{ base: "auto", md: "auto" }}
      width={"100vw"}
      color={"white"}
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
        top={"020px"}
        minHeight={{ base: "1000px", sm: "900px", lg: "3000px" }}
        backgroundBlendMode="mutiply"
      ></Box>
      <EarningStatics />
      {/* Video Earnings History */}
      <Box
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
        borderRadius={"12px"}
        paddingX={"40px"}
        paddingY={"30px"}
        width={"full"}
        marginLeft={{ md: "10" }}
        marginTop={"10"}
      >
        <Flex flexDirection={"column"} paddingBottom={"8"} gap={"10"}>
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"600"}>
            Video Earnings History
          </Text>
          <Box>
            <TableContainer>
              <Table variant="unstyled">
                <Thead>
                  <Tr backgroundColor="rgba(250, 250, 250, 0.05)">
                    <Th width={{ base: "20%", md: "17%" }} fontSize={"sm"}>
                      Video
                    </Th>
                    <Th width={"20%"} fontSize={"sm"}>
                      Info
                    </Th>
                    <Th width={"12%"} fontSize={"sm"}>
                      Duration Watched
                    </Th>
                    <Th width={"12%"} fontSize={"sm"}>
                      Video Earnings
                    </Th>
                    <Th width={"12%"} fontSize={"sm"}>
                      Final Balance
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <EachVideoHistory
                    VideoBg="/images/video-list-bg2.svg"
                    title="The Impact of Distributed Ledger Technology on the Healthcare Industry"
                    creator="Mastermind"
                    time="5m 15s"
                    earning="5"
                    finalBalance="302"
                  />
                  <EachVideoHistory
                    VideoBg="/images/video-list-bg7.svg"
                    title="Owning the Future: The Cultural Significance and Impact of NFTs on the Arts and Collectibles"
                    creator="The Adventure"
                    time="10m 15s"
                    earning="17"
                    finalBalance="297"
                  />
                  <EachVideoHistory
                    VideoBg="/images/video-list-bg4.svg"
                    title="The Art History of NFTs"
                    creator="The Adventure"
                    time="13m 34s"
                    earning="25"
                    finalBalance="280"
                  />
                  <EachVideoHistory
                    VideoBg="/images/video-list-bg3.svg"
                    title="A Personal Look at the Life of an Independent Tech Creator"
                    creator="Akio Nakamura"
                    time="10m 15s"
                    earning="10"
                    finalBalance="255"
                  />
                  <EachVideoHistory
                    VideoBg="/images/video-list-bg8.svg"
                    title="Owning the Future: The Cultural Significance and Impact of NFTs on the Arts and Collectibles"
                    creator="King Making"
                    time="10m 15s"
                    earning="30"
                    finalBalance="245"
                  />
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Earnings;
