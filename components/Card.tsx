import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  GridItem,
  Grid,
} from "@chakra-ui/react";

const IMAGE1 = "/images/problem-1.svg";
const IMAGE2 = "/images/problem-2.svg";
const IMAGE3 = "/images/problem-3.svg";

export default function Card() {
  return (
    <Center py={12} gap={5}>
      <Grid
        gap={5}
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
      >
        <GridItem>
          <Box
            role={"group"}
            p={6}
            py={12}
            maxW={"330px"}
            w={"full"}
            bg="brand.darkBlue"
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            color="white"
            zIndex={1}
          >
            <Box display="flex" justifyContent={"center"}>
              <Image objectFit={"cover"} src={IMAGE1} width={"8em"} />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={600}>
                No Incentives for Attention
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text textAlign={"center"} color={"brand.gray"}>
                  Viewers feel like they are wasting time with no tangible
                  rewards or incentive
                </Text>
              </Stack>
            </Stack>
          </Box>
        </GridItem>

        <GridItem>
          <Box
            role={"group"}
            p={6}
            py={12}
            maxW={"330px"}
            w={"full"}
            bg="brand.darkBlue"
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            color="white"
            zIndex={1}
          >
            <Box display="flex" justifyContent={"center"}>
              <Image objectFit={"cover"} src={IMAGE2} width={"8em"} />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={600}>
                Unfair Financial Incentives
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text textAlign={"center"} color={"brand.gray"}>
                  Revenue is unfairly distributed between the platform and
                  users.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            role={"group"}
            p={6}
            py={12}
            maxW={"330px"}
            w={"full"}
            bg="brand.darkBlue"
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            color="white"
            zIndex={1}
          >
            <Box display="flex" justifyContent={"center"}>
              <Image objectFit={"cover"} src={IMAGE3} width={"8em"} />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={600}>
                Censorship
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text textAlign={"center"} color={"brand.gray"}>
                  Creators are facing the threat of being de-platformed.
                </Text>
              </Stack>
            </Stack>
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}
