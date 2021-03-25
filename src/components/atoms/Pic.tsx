interface PicProps {
  url: string,
  className?: string,

}

const Pic = (props: PicProps) => {
  const { url, className } = props;

  return (
    <div
      className={`bg-cover bg-center ${className ? className : ''}`}
      style={{ backgroundImage: `url(${url})` }}
    />
  )
}

export default Pic;