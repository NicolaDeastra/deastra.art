import { Heading, Box, Image } from "@chakra-ui/react";

import { GetAllPosts } from "generated/query";
import { request } from "lib/cms";
import React from "react";

export async function getStaticProps() {
  const data = await request({
    query: GetAllPosts,
  });
  return {
    props: { data },
  };
}

const Index = ({ data }) => {
  return (
    <Box h="100vh">
      <Heading>HHH</Heading>
    </Box>
  );
};

export default Index;
