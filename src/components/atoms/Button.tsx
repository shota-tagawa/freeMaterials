interface ButtonProps {
  children?: any,
  onClick?: any,
  className?: string,
  type?: 'button' | 'div' | 'a',
}

const Button = (props: ButtonProps) => {
  const { children, onClick, className, type } = props;
  const buttonClass = `cursor-pointer inline-block bg-gradient-to-r bg-black text-white py-2 px-7 rounded-full ${className ? className : ''}`;

  return (
    <>
      {(type === 'button' || !type) && (
        <button
          onClick={onClick}
          className={buttonClass}
        >
          {children}
        </button>
      )}
      {type === 'div' && (
        <div
          onClick={onClick}
          className={buttonClass}
        >
          {children}
        </div>
      )}
      {type === 'a' && (
        <a
          onClick={onClick}
          className={buttonClass}
        >
          {children}
        </a>
      )}
    </>
  )
}

export default Button;