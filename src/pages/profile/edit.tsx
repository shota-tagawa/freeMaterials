import { useSelector } from 'react-redux';
import AuthProtector from '../../components/AuthProtecter';
import { PageTitle } from '../../components/atoms';
import { Layout, Container } from '../../components/templates';
import { RootState } from '../../store';

const ProfileEdit = () => {
  return (
    <AuthProtector>
      <Layout>
        <Container>
          <PageTitle text="プロフィールを編集する" />
        </Container>
      </Layout>
    </AuthProtector>
  )
}

export default ProfileEdit;