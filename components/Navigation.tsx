import React from "react";
import Image from "next/image";
import {
  Navbar,
  Link,
  Text,
  Card,
  Spacer,
  Radio,
  useTheme,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const Navigation = () => {
  return (
    <Navbar
      variant="sticky"
      css={{ boxShadow: "none", backgroundColor: "transparent" }}
    >
      <Navbar.Brand css={{ boxShadow: "none" }}>
        {/* Logo */}
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content activeColor={"primary"} hideIn="xs" variant={"default"}>
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Gm Gm Sers!!!
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
