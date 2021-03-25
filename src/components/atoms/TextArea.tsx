interface TextFieldProps {
  multiline?: boolean,
  type?: string,
  className?: string,
  value?: any
  placeholder?: string
  onChange?: any,
  onClick?: any,
}

const TextField = (props: TextFieldProps) => {
  const { multiline, type, className, value, placeholder, onChange, onClick } = props;

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
                className={`rounded border-solid border-2 border-blue-400 p-1 ${className}`}
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