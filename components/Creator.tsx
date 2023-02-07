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
  Flex,
  Avatar,
} from "@chakra-ui/react";

export default function Creator(props: any) {
  return (
    <Center py="20" paddingTop={"none"}>
      <Box
        width={{ base: "200px", md: "235px" }}
        height={{ base: "300px", md: "360px" }}
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(2px)"
        borderRadius="16px"
        display={"flex"}
        flexDirection={"column"}
        color={"white"}
        paddingX={"20px"}
        paddingTop={"15px"}
        paddingBottom={"none"}
        gap={"15px"}
      >
        <Image src={props.cretorImage} borderRadius={"13px"} />
        <Text fontSize={"2xl"} fontWeight={"bold"} paddingTop={"5px"}>
          {props.creatorName}
        </Text>
        <Box
          flexDirection={"row"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text color={"gray.400"} fontSize={{ base: "xl", md: "2xl" }}>
            Followers
          </Text>
          <Text fontSize={{ base: "xl", md: "2xl" }}>{props.followers}</Text>
        </Box>
      </Box>
    </Center>
  );
}

// export default function Card() {
//   return (
//     <Center py="20">
//       <Box
//         position="relative"
//         width={"300px"}
//         height={"300px"}
//         background="rgba(255, 255, 255, 0.05)"
//         backdropFilter="blur(5px)"
//         boxSizing="border-box"
//         clipPath="polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0 100%, 0% 75%)"
//         borderRadius={10}
//       >
//         <Stack pt={10} align={"center"}>
//           <Stack direction={"row"} align={"center"}>
//             <Text color={"white"}>
//               Revenue is unfairly distributed between the platform and users.
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }
