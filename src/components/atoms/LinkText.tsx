import Link from 'next/link';

interface LinkTextProps {
  href: string,
  text: string,
}

const LinkText = (props: LinkTextProps) => {
  const { href, text } = props;

  return (
    <Link href={href}>
      <a className="text-blue-500 hover:underline">{text}</a>
    </Link>
  )
}

export default LinkText;