import { combineReducers } from '@reduxjs/toolkit';
import profiles from 'features/page-games/slice'

const rootReducer = combineReducers({
  profiles,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
