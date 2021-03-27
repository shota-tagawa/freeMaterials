interface PostTagProps {
  className?: string,
  withDeleteButton?: boolean,
  value: string,
  onClick?: any,
}

const PostTag = (props: PostTagProps) => {
  const { className, withDeleteButton, value, onClick } = props;

  return (
    <div>{value}</div>
  )
}

export default PostTag;