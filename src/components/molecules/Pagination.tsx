import { PaginationButton } from '../atoms';

interface PaginationProps {
  className?: string,
  baseURL: string,
  current: number,
  length: number
}

const Pagination = (props: PaginationProps) => {
  const { length, current, className, baseURL } = props;

  return (
    <div className={className ? className : ''}>
      <div className="justify-center flex">
        {current === 0 || (
          <PaginationButton
            href={`${baseURL}page=${current - 1}`}
            text="前へ"
          />
        )}
        {current === length || (
          <PaginationButton
            href={`${baseURL}page=${current + 1}`}
            text="次へ"
          />
        )}
      </div>
    </div>
  )
}

export default Pagination;