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

  const userMenuItems: { slug: string, text: string }[] = [
    { slug: '/mypage', text: 'マイページ' },
    { slug: '/add-post', text: '新規投稿' },
  ]

  const guestMenuItems: { slug: string, text: string }[] = [
    { slug: '/signin', text: 'サインイン' },
    { slug: '/signup', text: 'サインアップ' },
  ]

  return (
    <>
      <div className={`px-4 py-8 bg-gray-800 text-gray-300 fixed top-0 right-0 z-50 h-full w-7/12 md:text-lg md:py-16 md:px-8 transition-all ${menuOpen || 'transform translate-x-full'}`}>
        <ul>
          {isSignIn ?
            <>
              {userMenuItems.map(userMenuItem => (
                <DrawerMenuItem key={userMenuItem.slug}>
                  <Link href={userMenuItem.slug}><a>{userMenuItem.text}</a></Link>
                </DrawerMenuItem>
              ))}
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
              {guestMenuItems.map(guestMenuItem => (
                <DrawerMenuItem key={guestMenuItem.slug}>
                  <Link href={guestMenuItem.slug}><a>{guestMenuItem.text}</a></Link>
                </DrawerMenuItem>
              ))}
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