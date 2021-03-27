import { useState } from 'react';
import { Layout, Container } from '../components/templates';
import { PageTitle } from '../components/atoms';
import { AddPostForm } from '../components/molecules';
import AuthProtector from '../components/AuthProtecter';
import Head from 'next/head';

const AddPost = () => {
  const [image, setImage] = useState('');

  return (
    <AuthProtector>
      <Layout>
        <Head>
          <title>新規投稿</title>
        </Head>
        <Container>
          <PageTitle text="新規投稿" />
          <AddPostForm />
        </Container>
      </Layout>
    </AuthProtector>
  )
}

export default AddPost;