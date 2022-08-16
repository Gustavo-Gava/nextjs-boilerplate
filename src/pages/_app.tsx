import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '../styles/global/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <meta
          name="description"
          content="A simple project to work with Typescript, React, Nextjs, GraphQL and GraphCMS"
        ></meta>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
