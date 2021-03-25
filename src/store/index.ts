import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user';

const reducer = combineReducers({
  user: userReducer
})


const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>

export default store;