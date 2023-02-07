import { Box, Text, Image, Flex, Button, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

const EarningStatics: React.FC = () => {
  const router = useRouter();
  const isEarningPage = router.pathname === "/Earnings";

  return (
    <Box
      background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
      borderRadius={"12px"}
      paddingX={{ base: "1", md: "40px" }}
      paddingY={"30px"}
      width={{ base: "100%", md: "full" }}
      marginLeft={{ base: "unset", md: "10" }}
      paddingLeft={"10"}
    >
      <Flex
        flexDirection={"row"}
        justifyContent={{ md: "space-between" }}
        paddingBottom={"8"}
        gap={{ base: "10", md: "20" }}
        width={"full"}
      >
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"600"}>
          Earning Statics
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
      <Flex
        gap={{ base: "10px", md: "25px" }}
        paddingTop={"10px"}
        borderRadius={"16px"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"6"}
          fontSize={"xl"}
        >
          <Text color={"gray.400"}>Total Earnings</Text>
          <Text
            flexDirection={"row"}
            display={"flex"}
            gap={"10px"}
            fontWeight={"600"}
          >
            <Image
              src="/images/splash-token.svg"
              width={{ base: "5", md: "7" }}
              fontSize={"2xl"}
              fontWeight={"600"}
            />
            302
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"6"}
          fontSize={"xl"}
        >
          <Text color={"gray.400"}>Video Watched</Text>
          <Text
            flexDirection={"row"}
            display={"flex"}
            gap={"10px"}
            fontSize={"2xl"}
            fontWeight={"600"}
          >
            75
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"6"}
          fontSize={"xl"}
        >
          <Text color={"gray.400"}>Duration Watched</Text>
          <Text
            flexDirection={"row"}
            display={"flex"}
            gap={"10px"}
            fontWeight={"600"}
            fontSize={"2xl"}
          >
            2h 45m
          </Text>
        </Box>
      </Flex>
      <>
        {isEarningPage ? (
          ""
        ) : (
          <Link href="/Earnings">
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={{ base: "flex-start", md: "flex-end" }}
            >
              <Button
                marginTop={{ base: "10" }}
                bgColor={"brand.purple"}
                color={"white"}
                borderRadius={"13px"}
                fontSize={"xl"}
                fontWeight={"medium"}
                paddingY={"13px"}
              >
                View Deatils
              </Button>
            </Box>
          </Link>
        )}
      </>
    </Box>
  );
};

export default EarningStatics;
