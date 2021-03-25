import { createSlice } from "@reduxjs/toolkit";

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

const firebaseSignIn = () => {
  return async (dispacth) => {

  }
};

const firebaseSignOut = () => {
  return async (dispatch) => {

  }
}

export default slice.reducer;

export const { signIn, signOut } = slice.actions;