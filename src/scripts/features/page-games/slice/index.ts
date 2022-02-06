import { createSlice } from '@reduxjs/toolkit';
import { fetchGames } from './thunk';

const initialState: SlicesDefinitions.IApiSliceState<(Components.IGames[])> =
  {
    apiStatus: 'None',
    data: [],
    error: null,
  };

const taskSlice = createSlice({
  name: 'games/fetch',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => ({
      ...state,
      apiStatus: 'Pending',
    }));
    builder.addCase(fetchGames.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      apiStatus: 'Pending',
    }));
    builder.addCase(fetchGames.rejected, (state) => ({
      ...state,
      apiStatus: 'Pending',
    }));
  },
});

export default taskSlice.reducer;
