import AuthProtecter from '../components/AuthProtecter';
import { Layout, Container } from '../components/templates';
import { Pic, TextField, GridCol } from '../components/atoms';
import { GridRow } from '../components/organisms';
import { useDispatch } from 'react-redux';
import { firebaseSignOut } from '../store/user';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <Layout>
      <Container>
        <p>Index Page</p>
      </Container>
    </Layout>
  )
}
