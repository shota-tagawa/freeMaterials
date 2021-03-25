interface PageTitleProps {
  text: string,
  className?: string,
}

const PageTitle = (props: PageTitleProps) => {
  const { text, className } = props;

  return (
    <h1
      className={`text-lg mb-4 sm:text-2xl ${className ? className : ''}`}
    >
      {text}
    </h1>
  )
}

export default PageTitle;