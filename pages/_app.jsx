import { DokzProvider, GithubLink, ColorModeSwitch } from "@aserto/dokz";
import React, { Children, Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { ChakraProvider, Link as ChakraLink } from "@chakra-ui/react";

const CustomLink = ({children, href, ...props}) => {
  return href.startsWith("/") || href === "" ? (
    <ChakraLink
      w='fit-content'
      position='relative'
      lineHeight='1.4em'
      textDecoration='none'
      color='#277F82'
      fontWeight='medium'
      borderBottom='2px solid'
      borderColor='transparent'
      py='0.2em'
      // isTruncated
      transition='border-color 0.2s ease-in-out 0s'
      _hover={{
          borderColor: 'currentColor',
      }}
    >
      <Link href={href} {...props}>
        {children}
      </Link>
    </ChakraLink>
  ) : (
    <ChakraLink
      w='fit-content'
      position='relative'
      lineHeight='1.4em'
      textDecoration='none'
      color='#277F82'
      fontWeight='medium'
      borderBottom='2px solid'
      borderColor='transparent'
      py='0.2em'
      // isTruncated
      transition='border-color 0.2s ease-in-out 0s'
      _hover={{
          borderColor: 'currentColor',
      }}
      {...props}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>                
    </ChakraLink>
  );
}

const HeaderLink = ({ children, ...props }) => {
  return (
    <ChakraLink
      w='fit-content'
      position='relative'
      lineHeight='1em'
      textDecoration='none'
      color='#ECEDED'
      fontWeight='light'
      borderBottom='1px solid'
      borderColor='transparent'
      py='0.2em'
      _hover={{
          borderColor: 'currentColor',
      }}
      style={{
        marginRight: 32,
        marginLeft: 12,
      }}
      {...props}
    >
      <a {...props}>
        {children}
      </a>                
    </ChakraLink>    
  )  
}

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider resetCSS>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Code"
          rel="stylesheet"
          key="google-font-Fira"
        />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="description" content="Aserto documentation" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>Aserto Documentation</title>
      </Head>
      <DokzProvider
        headerItems={[
          <ColorModeSwitch key="0" />,
          <HeaderLink key="1" href="https://blog.aserto.com">Blog</HeaderLink>,
          <HeaderLink key="2" href="https://aserto.com/about">About</HeaderLink>,
          <HeaderLink key="3" href="https://aserto.com/careers">Careers</HeaderLink>,          
        ]}
        initialColorMode="dark"
        headerLogo={
          <a href='https://www.aserto.com'>
            <img
              src={'/Aserto-logo-color-120px.png'}
              alt="Aserto"
              width={120}
            />
          </a>
        }
        mdxComponents={{
          a: CustomLink
        }}
        sidebarOrdering={{
          "index.mdx": true,
          "policy-as-code.mdx": true,
          "enterprise-ready.mdx": true,
          "built-for-developers.mdx": true,
          "getting-started": {
            "quickstart.mdx": true,
            "create-account.mdx": true,
            "create-policy.mdx": true,
            "set-up-users.mdx": true,
            "connect-idp.mdx": true,
            "create-auth0-app.mdx": true,
            "deploy-peoplefinder.mdx": true,
            "make-policy-change.mdx": true,
            "install-onebox.mdx": true,
          },
        }}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </ChakraProvider>
  );
}
