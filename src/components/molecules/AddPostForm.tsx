import { ChangeEvent, useState } from 'react';
import Router from 'next/router';
import { useInputImage, useRondomString } from '../../hooks';
import { db, storage } from '../../firebase';
import { Button, TextField } from '../atoms';
import { ImageUploadButton } from '../molecules';

interface AddPostFormProps {
  className?: string,
}

const AddPostForm = (props: AddPostFormProps) => {
  const { className } = props;
  const { imageURL, imageFile, error, inputImage } = useInputImage();
  const [postTitle, setPostTitle] = useState<string>('');

  const inputPostTitle = (e: ChangeEvent<HTMLInputElement>) => setPostTitle(e.target.value);
  
  const upload = async () => {
    // ********************************
    // 画像がない場合は処理を終了させる
    if (!imageFile) return false;
    // ********************************

    // ********************************
    // 画像をストレージにアップロードする
    const fileType = imageFile.type === 'image/jpeg' ? 'jpg' : 'png';
    const id = useRondomString(24);
    const storageRef = storage.child(`${id}.${fileType}`);
    const data = await storageRef.put(imageFile)
    const url = await data.ref.getDownloadURL();
    // ********************************

    // ********************************
    // Firestoreに投稿内容を保存する
    db.collection('posts').doc(id).set({
      id,
      url,
      postTitle,
      stars: [],
      tags: [],
    })
      .then(() => Router.push('/mypage'))
      .catch(() => alert('画像のアップロードに失敗しました！'))
    // ********************************
  }

  return (
    <div className={className && className}>
      <ImageUploadButton
        onChange={(e) => { inputImage(e) }}
        imageURL={imageURL}
        error={error}
        className='mb-4'
      />
      <div className="mb-4">
        <TextField
          className="w-full sm:w-7/12"
          placeholder="タイトル"
          value={postTitle}
          onChange={(e) => { inputPostTitle(e) }}
        />
      </div>
      <div>

      </div>
      <div>
        <Button type="button" onClick={() => { upload() }}>投稿する</Button>
      </div>
    </div>
  )
}

export default AddPostForm;