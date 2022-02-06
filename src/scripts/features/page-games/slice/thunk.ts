import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'src/api';

export const fetchGames = createAsyncThunk('/profiles/list', async () => {
  const response = await api.getGames();
  return response;
});
