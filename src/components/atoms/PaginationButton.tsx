import Link from 'next/link';

interface PaginationButtonProps {
  href: string,
  text: string | number,
  isCurrent?: boolean
}

const PaginationButton = (props: PaginationButtonProps) => {
  const { href, text, isCurrent } = props;

  return (
    <div className={`${isCurrent ? 'bg-white border-solid border-2 border-bloack text-black' : 'bg-black text-white'} inline-flex justify-center items-center text-sm w-10 h-10 mr-4 last:mr-0`}>
      <Link href={href}>
        <a>
          <span>{text}</span>
        </a>
      </Link>
    </div>
  )
}

export default PaginationButton;