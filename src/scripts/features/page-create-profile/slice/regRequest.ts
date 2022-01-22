import { createSlice } from '@reduxjs/toolkit';
import { createProfile } from './thunks';

// const INITIAL_CHART_KIND: TTherapyKind = 'Motoric';

const initialState: SlicesDefinitions.IApiSliceState<null> =
{
  data: null,
  apiStatus: 'None',
  error: null,
};

const slice = createSlice({
  name: 'registrationSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProfile.pending, (state) => ({
      ...state,
      apiStatus: 'Pending',
    }));
    builder.addCase(createProfile.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      apiStatus: 'Success',
    }));
    builder.addCase(createProfile.rejected, (state) => ({
      ...state,
      apiStatus: 'Failed',
      error: '', //TODO: Think about getting error string from api result
    }));
  },
});

export default slice.reducer;
