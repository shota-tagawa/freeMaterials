import { PageTitle } from '../components/atoms';
import { Layout, Container } from '../components/templates';
import { SignUpFrom } from '../components/molecules';
import Head from 'next/head';

const SignIn = () => {
  return (
    <Layout>
      <Head>
        <title>サインアップ</title>
      </Head>
      <Container>
        <PageTitle text="サインアップ" />
        <SignUpFrom />
      </Container>
    </Layout>
  )
}

export default SignIn;