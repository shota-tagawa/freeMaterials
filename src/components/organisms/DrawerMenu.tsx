import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../store/menu';
import { firebaseSignOut } from '../../store/user';
import { RootState } from '../../store';
import { DrawerMenuItem } from '../atoms';
import Link from 'next/link';

const DrawerMenu = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state: RootState) => state.menu.menuOpen);
  const isSignIn = useSelector((state: RootState) => state.user.isSignIn);

  return (
    <>
      <div className={`px-4 py-8 bg-gray-800 text-gray-300 fixed top-0 right-0 z-50 h-full w-7/12 md:text-lg md:py-16 md:px-8 transition-all ${menuOpen || 'transform translate-x-full'}`}>
        <ul>
          {isSignIn ?
            <>
              <DrawerMenuItem>
                <Link href="/mypage">
                  <a>マイページ</a>
                </Link>
              </DrawerMenuItem>
              <DrawerMenuItem>
                <span
                  className="cursor-pointer"
                  onClick={() => { dispatch(firebaseSignOut()) }}>
                  サインアウト
                </span>
              </DrawerMenuItem>
            </>
            :
            <>
              <DrawerMenuItem>
                <Link href="/signin"><a>サインイン</a></Link>
              </DrawerMenuItem>
              <DrawerMenuItem>
                <Link href="/signup"><a>サインアップ</a></Link>
              </DrawerMenuItem>
            </>
          }
        </ul>
      </div>
      <div
        onClick={() => { dispatch(close()) }}
        className={`bg-gray-800 fixed top-0 left-0 z-40 h-full w-full opacity-50 cursor-pointer ${menuOpen || 'hidden'}`}
      />
    </>
  )
}

export default DrawerMenu;