import { LinkProps as ChakraLinkProps} from '@chakra-ui/react'
import { PropsWithChildren } from "react";

export type LinkProps = ChakraLinkProps & PropsWithChildren<{
    href: string
}>