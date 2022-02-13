import { Container, Flex, useColorMode } from "@chakra-ui/react";
import React, { ReactNode } from "react";

import FooterComponent from "components/layout/FooterComponent";
import HeaderComponent from "components/layout/HeaderComponent";

type ContainerProps = {
  children: ReactNode;
};

const ComponentWrapper = ({ children }: ContainerProps) => {
  const { colorMode } = useColorMode();

  const color = { light: "black", dark: "white" };
  return (
    <Flex direction="column" minH="100vh" color={color[colorMode]}>
      <HeaderComponent />
      <Container as="main" pt="8rem">
        {children}
      </Container>
      <FooterComponent />
    </Flex>
  );
};

export default ComponentWrapper;
