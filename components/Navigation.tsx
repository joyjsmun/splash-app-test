import React from "react";
import {
  Button,
  Row,
  Container,
  Image,
  Text,
  Link,
  Col,
} from "@nextui-org/react";

import splashLogo from "/images/splash-logo.svg";

const Navigation = () => {
  return (
    <Container fluid direction="row" justify="space-between" gap={1}>
      <Row justify="flex-start">
        <Image src="/images/splash-logo.svg" width={140} />
        <Button
          auto
          flat
          as={Link}
          href="#"
          // css={{
          //   backgroundColor: "transparent",
          //   color: "$brightBlue",
          //   border: "1px solid $brightBlue",
          // }}
          color={"gradient"}
        >
          Go to App
        </Button>
      </Row>
    </Container>
  );
};

export default Navigation;
