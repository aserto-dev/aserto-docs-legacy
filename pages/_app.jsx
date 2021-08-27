import { DokzProvider, GithubLink, ColorModeSwitch } from "@aserto/dokz";
import React, {Children, Fragment, useEffect} from "react";
import Head from "next/head";
import { ChakraProvider, Link as ChakraLink, Box, useColorMode } from "@chakra-ui/react";
import CustomLink from '../src/components/CustomLink'
import './_app.css'

const HeaderLink = ({ children, ...props }) => {
  return (
      <a {...props}>
        {children}
      </a>                
  )  
}

export default function App(props) {
  const { Component, pageProps } = props;
  const { colorMode } = useColorMode()

  return (
    <ChakraProvider resetCSS>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Code"
          rel="stylesheet"
          key="google-font-Fira"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Aserto documentation" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <title>Aserto Documentation</title>
        <link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet" />
      </Head>
      <DokzProvider
        headerItems={[
          <ColorModeSwitch key="0" style={{
            marginLeft: 3,
            marginTop: 10,
            marginRight: 20
          }} />,
          <HeaderLink style={{
            paddingTop: 18
          }} key="1" href="https://aserto.com/blog">Blog</HeaderLink>,
          <HeaderLink style={{
            paddingTop: 18
          }} key="2" href="https://aserto.com/about">About</HeaderLink>,
          <HeaderLink style={{
            paddingTop: 18
          }} key="3" href="https://aserto.com/careers">Careers</HeaderLink>,
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
          "api-reference.mdx": true,
          "overview": {
            "introduction.mdx": true,
            "authorizer.mdx": true,
            "policy": true,
            "control-plane.mdx": true,
            "tenant.mdx": true,
            "connections.mdx": true,
            "policy-lifecycle.mdx": true,
            "directory.mdx": true,
            "decision-logs.mdx": true,
          },
          "getting-started": {
            "quickstart.mdx": true,
            "create-account.mdx": true,
            "create-policy.mdx": true,
            "set-up-users.mdx": true,
            "connect-idp.mdx": true,
            "extend-user-attributes.mdx": true,
            "create-auth0-app.mdx": true,
            "deploy-peoplefinder.mdx": true,
            "exploring-peoplefinder.mdx": true,
            "make-policy-change.mdx": true,
            "install-onebox.mdx": true,
          },
          "aserto-console": {
            "introduction.mdx": true,
            "connections.mdx": true,
            "directory.mdx": true,
            "policies.mdx": true,
            "view-policies.mdx": true,
            "manage-tenant.mdx": true,
          },
          "authorizer-guide": {
            "overview.mdx": true,
            "authz.mdx": true,
            "is.mdx": true,
            "identity-context.mdx": true,
            "policy-context.mdx": true,
            "resource-context.mdx": true,
            "query.mdx": true,
            "display-state-map.mdx": true,
            "decisiontree.mdx": true,
            "dir.mdx": true,
            "policy.mdx": true,
          },
          "software-development-kits": {
            "sdks.mdx": true,
            "react.mdx": true,
            "express.mdx": true,
            "javascript.mdx": true,
          },
          "command-line-interface": {
            "introduction.mdx": true,
            "installation.mdx": true,
            "login.mdx": true,
            "policies.mdx": true,
            "connections.mdx": true,
            "directory.mdx": true,
            "onebox.mdx": true,
          },
        }}
      >
        <Component {...pageProps} />
      </DokzProvider>
    </ChakraProvider>
  );
}
