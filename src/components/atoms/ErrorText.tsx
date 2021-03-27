interface ErrorTextProps {
  text: string,
  className?: string,
}

const ErrorText = (props: ErrorTextProps) => {
  const { text, className } = props;

  return (
    <p
      className={`text-sm text-red-500 ${className ? className : ''}`}
    >
      {text}
    </p>
  )
}

export default ErrorText;