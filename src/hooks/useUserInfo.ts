import { useState, useEffect } from 'react';
import { firebaseUserData } from '../types/firebase';
import { db } from '../firebase';

const useUserInfo = (uid: string) => {
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [selfIntroduction, setSelfIntroduction] = useState('');

  useEffect(() => {
    (async () => {
      db.collection('users').doc(uid).get()
        .then(user => {
          if(user.exists){
            const userData = user.data() as firebaseUserData;
            setDisplayName(userData.displayName);
            setPhotoURL(userData.photoURL);
            setSelfIntroduction(userData.selfIntroduction);
          } 
        })
    })();
  }, [uid])

  return { displayName, photoURL, selfIntroduction };
}

export default useUserInfo;