import { useDispatch } from 'react-redux';
import { close } from '../../store/menu';

interface DrawerMenuItemProps {
  className?: string,
  children?: any
}

const DrawerMenuItem = (props: DrawerMenuItemProps) => {
  const { children, className } = props;
  const dispatch = useDispatch();


  return (
    <li
      className={`mb-2 last:mb-0 ${className ? className : ''}`}
      onClick={() => { dispatch(close()) }}
    >
      {children}
    </li>
  )
}

export default DrawerMenuItem;