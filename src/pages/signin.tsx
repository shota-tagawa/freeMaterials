import { Button, TextField, PageTitle } from '../components/atoms';
import { Layout, Container } from '../components/templates';
import { SignInFrom } from '../components/molecules';

const SignIn = () => {
  return (
    <Layout>
      <Container>
        <PageTitle text="サインイン" />
        <SignInFrom />
      </Container>
    </Layout>
  )
}

export default SignIn;