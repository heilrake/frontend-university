import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from '../../axios.js'


export const fetchAuth = createAsyncThunk(
  'posts/fetchAuth',
  async (data) => {
    try {
      const responce = await instance.post('/auth/login', data);
      return responce.data;
    } catch (error) {
      console.log(error)
    }
  }
)
