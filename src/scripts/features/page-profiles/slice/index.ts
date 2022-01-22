import { createSlice } from '@reduxjs/toolkit';
import { fetchProfiles } from './thunk';

const initialState: SlicesDefinitions.IApiSliceState<(Components.IProfile[])> =
  {
    apiStatus: 'None',
    data: [],
    error: null,
  };

const taskSlice = createSlice({
  name: 'mocaTask5Info',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfiles.pending, (state) => ({
      ...state,
      apiStatus: 'Pending',
    }));
    builder.addCase(fetchProfiles.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      apiStatus: 'Pending',
    }));
    builder.addCase(fetchProfiles.rejected, (state) => ({
      ...state,
      apiStatus: 'Pending',
    }));
  },
});

export default taskSlice.reducer;
