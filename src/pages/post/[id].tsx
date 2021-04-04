import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePost } from '../../hooks';
import AuthProtector from '../../components/AuthProtecter';
import { PageTitle, Button } from '../../components/atoms';
import { PostTags } from '../../components/molecules';
import { Layout, Container } from '../../components/templates';
import Head from 'next/head';

const Post = () => {
  const router = useRouter();
  const postQueryId = String(router.query.id);
  const { post, isLoad } = usePost({ postQueryId });

  return (
    <AuthProtector>
      {isLoad && (
        <>
          <Head>
            <title>{post ? post.title : '投稿が見つかりません'}</title>
          </Head>
          <Layout>
            <Container>
              <PageTitle text={post ? post.title : '投稿が見つかりません'} />
              {post ? (
                <div>
                  <figure className="mb-4">
                    <img src={post.imgurl} alt="" />
                  </figure>
                  <PostTags
                    className="mb-2"
                    tags={post.tags}
                  />
                  <div>
                    <a href={post.imgurl} download={post.title}>
                      <Button>画像をダウンロード</Button>
                    </a>
                  </div>
                </div>
              ) : (
                <p>投稿が見つかりませんでした。</p>
              )}
            </Container>
          </Layout>
        </>
      )}
    </AuthProtector>
  )
}

export default Post;