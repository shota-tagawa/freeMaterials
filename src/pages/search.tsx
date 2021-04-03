import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '../hooks';
import AuthProtector from '../components/AuthProtecter';
import { Layout, Container } from '../components/templates';
import { GridRow } from '../components/organisms';
import { Pagination, SearchForm } from '../components/molecules';
import { PageTitle, Pic, GridCol } from '../components/atoms';
import Head from 'next/head';

const Search = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>();
  const [page, setPage] = useState<number>(0);
  const { results, resultLength } = useSearch({ keyword, page });

  useEffect(() => {
    if (router.asPath !== router.route) {
      setKeyword(String(router.query.keyword));
      router.query.page && setPage(Number(router.query.page));
    }
  }, [router])

  return (
    <AuthProtector>
      <Head>
        <title>{keyword}の検索結果</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle text={`検索結果`} />
          <SearchForm
            className="mb-8"
            textFieldClassName="w-72 max-w-full"
          />
          <GridRow>
            {results.map((result, index) => (
              <GridCol className="mb-4" key={index}>
                <Pic className="pt-72 cursor-pointer" url={result.imgurl} />
              </GridCol>
            ))}
          </GridRow>
          <Pagination
            baseURL={`/search/?keyword=${keyword}&`}
            current={page}
            length={resultLength}
          />
        </Container>
      </Layout>
    </AuthProtector>
  )
}

export default Search;