import Head from 'next/head'
import { Header,Footer } from '../organisms';
import { Container } from './';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;