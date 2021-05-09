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
      </Head>
      <DokzProvider
        headerItems={[
          <GithubLink
            key="0"
            url="https://github.com/aserto-dev/aserto-docs"
          />,
          <ColorModeSwitch key="1" />,
        ]}
        initialColorMode="dark"
        headerLogo={
          <img src="/logo.png" width="50px" />
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
