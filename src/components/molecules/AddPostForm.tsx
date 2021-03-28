import { ChangeEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Router from 'next/router';
import { useInputImage, useRondomString } from '../../hooks';
import { db, storage } from '../../firebase';
import { Button, TextField } from '../atoms';
import { ImageUploadButton, PostTags } from '../molecules';

interface AddPostFormProps {
  className?: string,
}

const AddPostForm = (props: AddPostFormProps) => {
  const uid = useSelector((state:RootState) => state.user.uid);
  const { className } = props;
  const { imageURL, imageFile, error, inputImage } = useInputImage();
  const [title, setTitle] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const inputTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const inputTag = (e: ChangeEvent<HTMLInputElement>) => setTag(e.target.value);

  const tagValidations = [
    tags.includes(tag),
    tags.length >= 10,
    tag.length > 20,
    !tag,
  ];

  const uploadValidations = [
    !imageFile,
    !title,
  ]

  const addTag = () => {
    if (tagValidations.includes(true)) return;

    setTags([...tags, tag]);
    setTag('');
  }

  const upload = async () => {
    if (uploadValidations.includes(true)) return;

    // ********************************
    // 画像をストレージにアップロードする
    const fileType = imageFile.type === 'image/jpeg' ? 'jpg' : 'png';
    const id = useRondomString(24);
    const storageRef = storage.child(`${id}.${fileType}`);
    const data = await storageRef.put(imageFile)
    const imgurl = await data.ref.getDownloadURL();
    // ********************************

    // ********************************
    // Firestoreに投稿内容を保存する
    db.collection('posts').doc(id).set({
      id,
      uid,
      imgurl,
      title,
      stars: [],
      tags,
    })
      .then(() => Router.push('/mypage'))
      .catch(() => alert('画像のアップロードに失敗しました！'))
    // ********************************
  }

  return (
    <div className={className ? className : ''}>
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
          value={title}
          onChange={(e) => { inputTitle(e) }}
        />
      </div>
      <div>
        <PostTags
          tags={tags}
          withDeleteButton={true}
          setTags={setTags}
        />
      </div>
      <div className="mb-4">
        <TextField
          value={tag}
          onChange={(e) => { inputTag(e) }}
          placeholder="タグ"
          className="mr-2"
        />
        <Button type="button" onClick={() => { addTag() }}>追加</Button>
      </div>
      <div>
        <Button type="button" onClick={() => { upload() }}>投稿する</Button>
      </div>
    </div>
  )
}

export default AddPostForm;