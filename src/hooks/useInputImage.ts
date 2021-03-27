import { ChangeEvent, useState } from 'react';

const useInputImage = () => {
  const [imageURL, setImageURL] = useState<string>();
  const [imageFile, setImageFile] = useState<any>();
  const [error, setError] = useState<string>();

  const inputImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0]
    const fileType = file.type;

    if (fileType != 'image/jpeg' && fileType != 'image/png') {
      setError('送信できるファイルの形式はjpgもしくはpngのみです');
      return;
    }

    const reader = new FileReader()
    reader.onload = () => {
      setImageFile(file);
      setImageURL(reader.result as string);
    }
    reader.readAsDataURL(file)
  }

  return { imageURL, imageFile, error, inputImage, };
}

export default useInputImage;