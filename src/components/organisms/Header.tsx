import { useDispatch } from 'react-redux';
import { MenuButton } from '../atoms';
import { DrawerMenu } from './';
import Link from 'next/link';
import { open } from '../../store/menu';

interface HeaderProps {
  className?: string,
}

const Header = (props: HeaderProps) => {
  const { className } = props;
  const dispatch = useDispatch();

  return (
    <header className={className}>
      <nav className="bg-gray-800 text-gray-300 flex items-center py-2 px-4">
        <p>
          <Link href="/">
            <a>FreeMaterial</a>
          </Link>
        </p>
        <MenuButton
          onClick={() => { dispatch(open()) }}
          className="ml-auto"
        />
      </nav>
      <DrawerMenu />
    </header>
  )
}

export default Header;