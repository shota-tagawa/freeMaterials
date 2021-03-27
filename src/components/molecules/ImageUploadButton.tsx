import { Button, ErrorText } from '../atoms';

interface ImageUploadButtonProps {
  onChange?: any,
  imageURL: string,
  className?: string,
  error?: string,
}

const ImageUploadButton = (props: ImageUploadButtonProps) => {
  const { onChange, imageURL, className, error } = props;

  return (
    <div className={className && className}>
      {imageURL && <div className="w-full sm:w-7/12"><img src={imageURL} alt="" /></div>}
      {error && <ErrorText text={error} className="mb-2" />}
      <div>
        <label>
          <Button type="div">画像を添付</Button>
          <input type="file" className="hidden" onChange={onChange} />
        </label>
      </div>
    </div>
  )
}

export default ImageUploadButton;