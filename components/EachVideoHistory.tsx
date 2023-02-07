import {
  Tr,
  Td,
  Tfoot,
  Text,
  Image,
  Flex,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
const EachVideoHistory: React.FC = (props: any) => {
  return (
    <Tr>
      <Td>
        <Image src={props.VideoBg} minWidth={{ base: "140px" }} />
      </Td>
      <Td>
        <Flex
          flexDirection={"column"}
          gap={"3"}
          overflow={"hidden"}
          width={"400px"}
          fontWeight={"500"}
        >
          <div>{props.title}</div>
          <Flex gap={"3"}>
            <Image src="/images/splash-token.svg" />
            <div>{props.creator}</div>
          </Flex>
        </Flex>
      </Td>
      <Td>{props.time}</Td>
      <Td>
        <Flex gap={"5"}>
          <Image src="/images/splash-token.svg" />
          <div>{props.earning}</div>
        </Flex>
      </Td>
      <Td>
        <Flex gap={"5"}>
          <Image src="/images/splash-token.svg" />
          <div>{props.finalBalance}</div>
        </Flex>
      </Td>
    </Tr>
  );
};

export default EachVideoHistory;
