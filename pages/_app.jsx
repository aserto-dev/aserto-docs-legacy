import { DokzProvider, GithubLink, ColorModeSwitch } from 'dokz'
import React, { Fragment } from 'react'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <ChakraProvider resetCSS>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css?family=Fira+Code'
                    rel='stylesheet'
                    key='google-font-Fira'
                />
            </Head>
            <DokzProvider
                headerItems={[
                    <GithubLink
                        key='0'
                        url='https://github.com/aserto-dev/aserto-docs'
                    />,
                    <ColorModeSwitch key='1' />,
                ]}
                sidebarOrdering={{
                    'index.mdx': true,
                    'policy-as-code.mdx': true,
                    'enterprise-ready.mdx': true,
                    'built-for-developers.mdx': true,
                    'getting-started': {
                        'create-account.mdx': true,
                        'quickstart.mdx': true,
                    },
                }}
            >
                <Component {...pageProps} />
            </DokzProvider>
        </ChakraProvider>
    )
}
