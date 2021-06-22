import React from 'react'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

const CustomLink = ({children, href, ...props}) => {
  return href.startsWith("/") || href === "" ? (
    <ChakraLink
      w='fit-content'
      position='relative'
      lineHeight='1.4em'
      textDecoration='none'
      color='#67CBCF'
      fontWeight='medium'
      borderBottom='2px solid'
      borderColor='transparent'
      py='0.2em'
      // isTruncated
      transition='border-color 0.2s ease-in-out 0s'
      _hover={{
          borderColor: 'currentColor',
      }}
      style={{ alignSelf: 'center' }} 
    >
      <Link className='custom-link' href={href} {...props}>
        {children}
      </Link>
    </ChakraLink>
  ) : (
    <ChakraLink
      w='fit-content'
      position='relative'
      lineHeight='1.4em'
      textDecoration='none'
      color='#67CBCF'
      fontWeight='medium'
      borderBottom='2px solid'
      borderColor='transparent'
      py='0.2em'
      // isTruncated
      transition='border-color 0.2s ease-in-out 0s'
      _hover={{
          borderColor: 'currentColor',
      }}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...props}
    >
      {children}
    </ChakraLink>
  )
}

export default CustomLink