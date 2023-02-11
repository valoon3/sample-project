// import '@/styles/globals.css'

import Head from "next/head";
import {Meta} from "next/dist/lib/metadata/generate/meta";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet={"utf-8"} />
        <title>포트폴리오 작업</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
