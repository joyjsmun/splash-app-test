import React from "react";
import { Flex, Image, Button, Link, Container } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Flex
      justify={{ base: "space-around", sm: "space-between" }}
      px={{ base: 1, sm: 3, md: 12, lg: 40 }}
      py={6}
    >
      <Link href="/" _hover={{ opacity: 0.7 }}>
        <Image src="/images/splash-logo.svg" alt="Splash" />
      </Link>
      {/* Navlinks Here: Optional */}

      <Button
        variant="outline"
        px={{ base: 3 }}
        color={"brand.brightBlue"}
        borderRadius={30}
        borderColor="brand.brightBlue"
        py={6}
        _hover={{ opacity: 0.7 }}
      >
        Go to App
        <Image pl={2} src="/images/arrow-up-right.svg" alt="Arrow" />
      </Button>
    </Flex>
  );
};

export default Navbar;
