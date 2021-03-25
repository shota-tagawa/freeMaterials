import { PageTitle } from '../components/atoms';
import { Layout, Container } from '../components/templates';
import { SignInFrom } from '../components/molecules';
import Head from 'next/head';

const SignIn = () => {
  return (
    <Layout>
      <Head>
        <title>サインイン</title>
      </Head>
      <Container>
        <PageTitle text="サインイン" />
        <SignInFrom />
      </Container>
    </Layout>
  )
}

export default SignIn;