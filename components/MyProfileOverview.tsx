import { Box, Text, Image, Flex, Button, Link } from "@chakra-ui/react";
import EarningStatics from "./EarningStatics";

const MyProfileOverview: React.FC = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
      paddingY={"10"}
      gap={{ base: "10" }}
    >
      {/* Splash Token */}
      <Box
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
        borderRadius={"12px"}
        paddingX={{ base: "40px", md: "10" }}
        paddingY={"30px"}
        width={{ base: "100%", md: "30%" }}
      >
        <Text
          fontSize={"3xl"}
          fontWeight={"600"}
          paddingBottom={{ md: "30px" }}
        >
          Splash Token
        </Text>
        <Flex gap={"25px"} paddingTop={"10px"} borderRadius={"16px"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            fontSize={"xl"}
          >
            <Text color={"gray.400"}>Current Balance</Text>
            <Text flexDirection={"row"} display={"flex"} gap={"10px"}>
              <Image src="/images/splash-token.svg" width={"5"} />
              11
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            fontSize={"xl"}
          ></Box>
        </Flex>
      </Box>
      {/* Earning Statics */}
      <EarningStatics />
    </Flex>
  );
};

export default MyProfileOverview;
