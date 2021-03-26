import { Layout, Container } from '../components/templates';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>FreeMaterials</title>
      </Head>
      <Container>
        <p>Index Page</p>
      </Container>
    </Layout>
  )
}
