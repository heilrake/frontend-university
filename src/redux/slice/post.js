import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postActionCreators";

const initialState = {
  posts: [],
  isloading: false
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducer: {},
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action) => {
      state.isloading = false;
      state.posts = action.payload;
    },
    [fetchPosts.pending.type]: (state) => {
      state.isloading = true;
    },
    [fetchPosts.rejected.type]: (state, action) => {
      state.isloading = true;
      state.error = action.payload;
    },
  }
});
export default postsSlice.reducer;
