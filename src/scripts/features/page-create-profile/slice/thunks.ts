import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'src/api';


export const createProfile = createAsyncThunk(
  'auth/registeration',
  async (object: Components.ICreateProfile) => {
    const data = await api.createUser(object);
    return data;
  }
);
