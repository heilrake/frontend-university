import { createSlice } from '@reduxjs/toolkit';
import { fetchAuth, fetchAuthMe } from './authActionCreator';

const initialState = {
  data: null,
  isloading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchAuth.fulfilled.type]: (state, action) => {
      state.isloading = false;
      state.data = action.payload;
    },
    [fetchAuth.pending.type]: (state) => {
      state.isloading = true;
    },
    [fetchAuth.rejected.type]: (state, action) => {
      state.isloading = true;
      state.error = action.payload;
    },
    [fetchAuthMe.fulfilled.type]: (state, action) => {
      state.isloading = false;
      state.data = action.payload;
    },
    [fetchAuthMe.pending.type]: (state) => {
      state.isloading = true;
    },
    [fetchAuthMe.rejected.type]: (state, action) => {
      state.isloading = true;
      state.error = action.payload;
    },
  },
});
export const selectIsAuth = (state) => Boolean(state.authSlice.data); // check login or no

export default authSlice.reducer;
export const { logout } = authSlice.actions;
