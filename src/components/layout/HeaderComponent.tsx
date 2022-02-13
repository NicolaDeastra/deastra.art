import { Button, Container, Box, Heading, Flex } from "@chakra-ui/react";
import * as React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { GradientLine } from "components/Common/GradientLine";
import Logo from "components/Common/Logo";

const HeaderComponent = () => {
  return (
    <Flex
      as="header"
      top={0}
      css={{ backdropFilter: "saturate(180%) blur(20px)" }}
      w="full"
      direction="column"
      position="fixed"
      borderBottom={"1px"}
      borderBottomColor={"gray.200"}
    >
      <GradientLine />

      <Container color="white" py="2">
        <Logo />
      </Container>
    </Flex>
  );
};

export default HeaderComponent;
