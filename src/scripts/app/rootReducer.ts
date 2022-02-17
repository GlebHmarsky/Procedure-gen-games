import { combineReducers } from '@reduxjs/toolkit';
import profiles from 'features/page-games/slice'
import someGame from 'features/some-game/slice'

const rootReducer = combineReducers({
  profiles,
  someGame
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
