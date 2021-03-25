import { MenuButton } from '../atoms';

interface HeaderProps {
  className?: string,
}

const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <header className={className}>
      <nav className="bg-gray-800 flex items-center py-2 px-4">
        <ul className="bg-gray-800 text-gray-300 flex">
          <li className="mr-4">サインイン</li>
        </ul>
        <MenuButton
          className="ml-auto"
        />
      </nav>
    </header>
  )
}

export default Header;