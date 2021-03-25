import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
}

const slice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: () => {
      return {
        menuOpen: true
      }
    },
    close: () => {
      return {
        menuOpen: false
      }
    }
  }
})

export default slice.reducer;

export const { open, close } = slice.actions;