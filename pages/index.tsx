import { Text, Box } from "@chakra-ui/react";
import PassiveIncome from "@components/PassiveIncome";
import HowWorks from "@components/HowWorks";
import Problem from "@components/Problem";
import Showcase from "@components/Showcase";
import Why from "@components/Why";
import Footer from "@components/Footer";
import Test from "@components/test";

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
      <Problem />
      <HowWorks />
      <Why />
      <PassiveIncome />
      <Footer />
    </>
  );
}
