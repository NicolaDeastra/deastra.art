import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

import { LinkProps } from './types'


export default function Link({href, children, ...rest} : LinkProps) {
    return (
        <NextLink href={href}>
            <ChakraLink href={href} {...rest}>
                {children}
            </ChakraLink>
        </NextLink>
    )
}