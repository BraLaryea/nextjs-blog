import Link from "next/dist/client/link"
import Head from 'next/head'
import Script from 'next/script'
import Layout from "../../components/Layout"

const Firstpage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
          <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(`script loaded correctly, window.FB has been populated`)
            } />
        </Head>
        <h1>Firstpage</h1>
        <h2><Link href='/'><a>Back to home</a></Link></h2>
      </Layout>
    </>
  )
}

export default Firstpage