import AuthProtector from '../components/AuthProtecter';
import { PageTitle } from '../components/atoms';
import { Layout, Container } from '../components/templates';

const MyPage = () => {
  return (
    <AuthProtector>
      <Layout>
        <Container>
          <PageTitle text="マイページ" />
        </Container>
      </Layout>
    </AuthProtector>
  )
}

export default MyPage;