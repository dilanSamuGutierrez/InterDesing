import React from 'react'
import Head from 'next/head'
import ThemeContainer from '../context/theme/ThemeContainer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <title>Diseño de Interiores | InterDesing</title>
        <meta
          name="description"
          content="Interior home design project made using Next.js and Chakra UI"
        />
      </Head>

      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp