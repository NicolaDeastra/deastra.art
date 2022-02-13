import { Box } from "@chakra-ui/react";

export function GradientLine() {
  return (
    <Box
      width="full"
      height={3}
      bgGradient="linear(to-r, purple.400, purple.500, purple.400, pink.200)"
    />
  );
}
