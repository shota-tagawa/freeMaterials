import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { firebasePostData } from '../types/firebase';

interface usePostProps {
  postQueryId: string,
}

const usePost = (props: usePostProps) => {
  const { postQueryId } = props;
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [post, setPost] = useState<firebasePostData | null>();

  useEffect(() => {
    (async () => {
      db.collection('posts').doc(postQueryId).get()
        .then(firebasePost => {
          if (firebasePost.exists) {
            const postData = firebasePost.data() as firebasePostData;
            setPost(postData);
            setIsLoad(true)
          } else {
            setIsLoad(true)
          }
        });
    })();
  }, [postQueryId])

  return { post, isLoad };
}

export default usePost;