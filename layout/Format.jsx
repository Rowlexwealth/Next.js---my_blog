import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const Format = ({children}) => {
  return (
    <>
        <Head>
            <title>Blog</title>
        </Head>

        <Header/>
          <main>{children}</main>
        <Footer/>
    </>
  )
}

export default Format