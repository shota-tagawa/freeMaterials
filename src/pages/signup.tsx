import { PageTitle } from '../components/atoms';
import { Layout, Container } from '../components/templates';
import { SignUpFrom } from '../components/molecules';

const SignIn = () => {
  return (
    <Layout>
      <Container>
        <PageTitle text="サインアップ" />
        <SignUpFrom />
      </Container>
    </Layout>
  )
}

export default SignIn;