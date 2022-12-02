import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slice/post";
import authSlice from './slice/auth';


export const store = configureStore({
  reducer: {
    postsReducer,
    authSlice,
  },
})
