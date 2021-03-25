import Head from 'next/head'
import { Header, Footer } from '../organisms';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;