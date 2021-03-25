interface ButtonProps {
  children?: any,
  onClick?: any,
  className?: string
}

const Button = (props: ButtonProps) => {
  const { children, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r bg-black text-white py-2 px-7 rounded-full ${className}`}
    >
      {children}
    </button>
  )
}

export default Button;