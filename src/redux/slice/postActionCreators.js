import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from '../../axios.js'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const responce = await instance.get('/posts');
      return responce.data;
    } catch (error) {
      console.log(error)
    }
  }
);

export const fetchRemovePost = createAsyncThunk('post/fetchRemovePost', async (id) => await instance.delete(`/posts/${id}`))
