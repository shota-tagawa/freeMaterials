import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user';
import menuReducer from './menu';

const reducer = combineReducers({
  user: userReducer,
  menu: menuReducer
})


const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>

export default store;