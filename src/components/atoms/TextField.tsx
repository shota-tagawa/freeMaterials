interface TextFieldProps {
  multiline?: boolean,
  type?: string,
  className?: string,
  value?: any
  placeholder?: string
  onChange?: any,
  onClick?: any,
  fullWidth?: boolean,
}

const TextField = (props: TextFieldProps) => {
  const { multiline, type, className, value, placeholder, onChange, onClick, fullWidth } = props;
  

  return (
    <>
      {
        multiline ?
          (
            <div></div>
          ) :
          (
            <>
              <input
                className={`${fullWidth ? 'w-full ' : null}rounded border-solid border-2 border-blue-400 text-black p-1 ${className ? className : null}`}
                type={type || 'text'}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}
              />
            </>
          )
      }
    </>
  )
}

export default TextField;