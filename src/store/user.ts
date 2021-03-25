import { createSlice } from "@reduxjs/toolkit";
import { auth } from '../firebase';
import Router from 'next/router';

const initialState = {
  uid: 'hello',
  isSignIn: false,
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      return {
        uid: action.payload.uid,
        isSignIn: true
      }
    },
    signOut: () => {
      return {
        uid: '',
        isSignIn: false,
      }
    }
  },
});

export const firebaseSignUp = (email: string, password: string) => {
  return async (dispatch) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(signIn({
          uid: userCredential.user.uid
        }))
      })
      .catch(() => {
        alert('作成に失敗したようです。')
      })
  }
}

export const firebaseSignIn = (email: string, password: string) => {
  return async (dispatch) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        dispatch(signIn({
          uid: userCredential.user.uid
        }))
        Router.push('/')
      })
      .catch(() => {
        alert('ログイン失敗');
      })
  }
};

export const firebaseSignOut = () => {
  return async (dispatch) => {
    auth.signOut()
      .then(() => {
        dispatch(signOut());
      })
      .catch(() => {
        alert('ログアウト失敗')
      })
  }
}

export default slice.reducer;

export const { signIn, signOut } = slice.actions;