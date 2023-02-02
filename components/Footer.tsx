import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box backgroundColor={"#010217"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ base: "1fr 1fr", lg: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex>
              <Image src="/images/splash-logo.svg" />
            </Flex>
          </Stack>
          <Stack></Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About US</ListHeader>
            <Link href={"#"}>TheTeam</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Follow US</ListHeader>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Discord</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
        <Center pt={5}>
          <Text fontSize={"sm"}>© 2023 Splash Inc. All rights reserved.</Text>
          <Text pl={"10"}>info@splash.watch </Text>
        </Center>
      </Container>
    </Box>
  );
}
