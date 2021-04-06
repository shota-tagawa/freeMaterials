import Link from 'next/link';

interface PostTagProps {
  className?: string,
  withDeleteButton?: boolean,
  value: string,
  onClick?: any,
  isSearchQuery?: boolean
}

const PostTag = (props: PostTagProps) => {
  const { isSearchQuery, className, withDeleteButton, value, onClick } = props;

  return (
    <div className={`flex items-center bg-blue-500 text-white mr-2 mb-2 px-2 ${className ? className : ''}`}>
      {isSearchQuery ? (
        <Link href={`/search?keyword=${value}`}>
          <a>
            {value}
          </a>
        </Link>
      ) : (value)}
      {withDeleteButton && (
        <span
          onClick={onClick}
          className="material-icons text-sm inline-flex ml-2 cursor-pointer"
        >
          delete_forever
        </span>
      )}
    </div>
  )
}

export default PostTag;