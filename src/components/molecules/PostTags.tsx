import { PostTag } from '../atoms';

interface PostTagsProps {
  className?: string,
  tags: string[],
  withDeleteButton?: boolean,
  setTags?: any
}

const PostTags = (props: PostTagsProps) => {
  const { className, tags, withDeleteButton, setTags } = props;
  
  const deleteTag = (target: string) => setTags(tags.filter(tag => tag !== target));

  return (
    <div className={`flex flex-wrap ${className ? className : ''}`}>
      {tags.map(tag => (
        <PostTag
          value={tag}
          key={tag}
          withDeleteButton={withDeleteButton}
          onClick={() => { deleteTag(tag) }}
        />
      ))}
    </div>
  )
}

export default PostTags;