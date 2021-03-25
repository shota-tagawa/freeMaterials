interface GridColProps {
  className?: string,
  onClick?: any
  children?: any
}

const GridCol = (props: GridColProps) => {
  const { className, onClick, children } = props;

  return (
    <div className={`md:w-4/12 p-2 ${className ? className : ''}`}>
      {children}
    </div>
  )
};

export default GridCol;