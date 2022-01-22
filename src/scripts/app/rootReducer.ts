import { combineReducers } from '@reduxjs/toolkit';
import profiles from 'features/page-profiles/slice'
import createProfile from 'features/page-create-profile/slice'

const rootReducer = combineReducers({
  profiles,
  createProfile,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
