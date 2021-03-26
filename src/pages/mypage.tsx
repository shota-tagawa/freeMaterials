import AuthProtector from '../components/AuthProtecter';
import { PageTitle } from '../components/atoms';
import { Layout, Container } from '../components/templates';
import Head from 'next/head';

const MyPage = () => {
  return (
    <AuthProtector>
      <Head>
        <title>マイページ</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle text="マイページ" />
        </Container>
      </Layout>
    </AuthProtector>
  )
}

export default MyPage;