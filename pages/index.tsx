import { Text, Box } from "@chakra-ui/react";
import Primary from "@components/Primary";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Box
        width="100vw"
        bgColor="brand.darkBlue"
        bgImage="url('/images/home-blur-bg.svg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="repeat"
        zIndex={-2}
        position="absolute"
        top={"520px"}
        minHeight={{ base: "1000px", sm: "900px", lg: "3000px" }}
        backgroundBlendMode="mutiply"
      ></Box>
      <Primary />
      <Footer />
    </>
  );
}
