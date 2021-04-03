import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { firebasePostData } from '../types/firebase';
import AuthProtector from '../components/AuthProtecter';
import { Layout, Container } from '../components/templates';
import { GridRow } from '../components/organisms';
import { PageTitle, Pic, GridCol } from '../components/atoms';
import Head from 'next/head';
const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ADMIN_API_KEY
);
const index = client.initIndex("freeMaterials");


const Search = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>();
  const [page, setPage] = useState<number>(0);
  const [results, setResult] = useState<firebasePostData[]>([]);

  useEffect(() => {
    if (router.asPath !== router.route) {
      setKeyword(String(router.query.keyword));
      router.query.page && setPage(Number(router.query.page));
    }
  }, [router])

  useEffect(() => {
    (async () => {
      const res = await index.search(keyword, {
        hitsPerPage: 9,
        page
      })
      setResult(res.hits as firebasePostData[]);
    })();
  }, [keyword])

  return (
    <AuthProtector>
      <Head>
        <title>{keyword}の検索結果</title>
      </Head>
      <Layout>
        <Container>
          <PageTitle text={`検索結果`} />
          <GridRow>
            {results.map((result, index) => (
              <GridCol className="mb-4" key={index}>
                <Pic className="pt-72 cursor-pointer" url={result.imgurl} />
              </GridCol>
            ))}
          </GridRow>
        </Container>
      </Layout>
    </AuthProtector>
  )
}

export default Search;