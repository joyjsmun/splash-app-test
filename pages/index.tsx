import { Text, Box } from "@chakra-ui/react";
import Showcase from "@components/Showcase";

export default function Home() {
  return (
    <>
      <Box
        width="160vw"
        bgColor="brand.darkBlue"
        bgImage="url('/images/showcase-blur-bg.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="repeat"
        zIndex={-2}
        position="absolute"
        top={"-120px"}
        minHeight={{ base: "1000px", sm: "900px", lg: "1600px" }}
        backgroundBlendMode="mutiply"
      ></Box>
      <Showcase />
    </>
  );
}
