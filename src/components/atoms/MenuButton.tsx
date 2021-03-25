interface MenuButtonProps {
  onClick?: any,
  className?: string,
}

const MenuButton = (props: MenuButtonProps) => {
  const { onClick, className } = props;

  return (
    <button onClick={onClick} className={`inline-flex ${className}`}>
      <span className="material-icons text-white">menu</span>
    </button>
  )
}

export default MenuButton;