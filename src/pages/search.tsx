import { withRouter } from 'next/router';
import AuthProtector from '../components/AuthProtecter';
import { Layout, Container } from '../components/templates';
import { PageTitle } from '../components/atoms';
import Head from 'next/head';

const Search = withRouter((props) => {
  const keyword = props.router.query.keyword;

  return (
    <AuthProtector>
      <Head>
        <title>{keyword}の検索結果</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle text="検索結果" />
        </Container>
      </Layout>
    </AuthProtector>
  )
})

export default Search;