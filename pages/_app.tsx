import React from "react"
import { AppProps } from "next/app"
import Head from "next/head"

// eslint-disable-next-line import/no-extraneous-dependencies
import "tailwindcss/tailwind.css"

function MyApp({
  Component,

  pageProps,
}: AppProps) {
  return (
    <>
      <Head>
        <title>climatebert.ai</title>
        <meta
          name="description"
          content="AI powered climate-related corporate disclosure analytics"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
