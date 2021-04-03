import { useState, useEffect } from 'react';
import { firebasePostData } from '../types/firebase';
const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  process.env.ALGOLIA_ID,
  process.env.ADMIN_API_KEY
);
const index = client.initIndex("freeMaterials");

interface useSearchProps {
  keyword: string,
  page: number,
}

const useSearch = (props: useSearchProps) => {
  const { keyword, page } = props;
  const [resultLength, setResultLength] = useState<number>(0);
  const [results, setResult] = useState<firebasePostData[]>([]);

  useEffect(() => {
    (async () => {
      const hitsPerPage = 9;
      const resWithPerPage = await index.search(keyword, {
        hitsPerPage,
        page
      })
      setResult(resWithPerPage.hits as firebasePostData[]);

      const allRes = await index.search(keyword);
      setResultLength(Math.round(allRes.hits.length / hitsPerPage));
    })();
  }, [keyword, page])

  return { results, resultLength };
}

export default useSearch;