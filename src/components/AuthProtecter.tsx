import { useState, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { signIn } from '../store/user';

const AuthProtecter = ({ children }) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn({
          uid: user.uid,
          isSignIn: true
        }))
        setIsLoad(true);
      } else {
        Router.push('/signin');
      }
    })
  }, []);

  return (
    <>
      {isLoad && children}
    </>
  )
}

export default AuthProtecter;