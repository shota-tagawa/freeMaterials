import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useUserInfo } from '../hooks';
import AuthProtector from '../components/AuthProtecter';
import { PageTitle } from '../components/atoms';
import { Layout, Container } from '../components/templates';
import Head from 'next/head';

const MyPage = () => {
  const uid = useSelector((state: RootState) => state.user.uid);
  const { displayName, photoURL, selfIntroduction } = useUserInfo(uid);

  return (
    <AuthProtector>
      <Head>
        <title>マイページ</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle text="マイページ" />
          <p>uid:{uid}</p>
          <p>displayName:{displayName}</p>
          <p>photoURL: {photoURL}</p>
          <p>selfIntroduction: {selfIntroduction}</p>
        </Container>
      </Layout>
    </AuthProtector>
  )
}

export default MyPage;