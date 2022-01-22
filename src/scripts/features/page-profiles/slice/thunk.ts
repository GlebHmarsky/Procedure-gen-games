import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'src/api';

export const fetchProfiles = createAsyncThunk('/profiles/list', async () => {
  const response = await api.getProfiles();
  return response;
});
