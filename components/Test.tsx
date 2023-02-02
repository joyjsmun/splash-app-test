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

export default function Card() {
  return (
    <Center py="20">
      <Box
        position="relative"
        width={"300px"}
        height={"300px"}
        background="linear-gradient(to right,#333399,#7554FA)"
        boxSizing="border-box"
        clipPath="polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0 100%, 0% 75%)"
        borderRadius={10}
      >
        <Image
          position="absolute"
          style={{
            backdropFilter: "blur(14px) saturate(180%)",
          }}
          backgroundColor="white"
          background="linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0.2)
    )"
          backdropFilter="blur(1rem)"
          z-index="1"
          borderRadius="5rem"
          boxShadow="0 0 1rem rgba(0, 0, 0, 0.2)"
          clipPath="polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0 100%, 0% 75%)"
        />

        <Stack pt={10} align={"center"}>
          <Heading
            fontSize={"xl"}
            fontFamily={"body"}
            fontWeight={600}
            color={"white"}
          >
            Unfair Financial Incentives
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text textAlign={"center"} color={"white"}>
              Revenue is unfairly distributed between the platform and users.
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
