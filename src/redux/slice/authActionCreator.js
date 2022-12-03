import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../axios.js';

export const fetchAuth = createAsyncThunk('posts/fetchAuth', async (data) => {
  try {
    const response = await instance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const fetchAuthMe = createAsyncThunk('posts/fetchAuthMe', async () => {
  try {
    const response = await instance.get('/auth/me');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
