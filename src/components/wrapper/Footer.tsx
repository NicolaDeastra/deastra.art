import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    direction="column"
    width="full"
    marginTop="auto"
    borderTopWidth={2}
    {...props}
  />
);

export default Footer;
