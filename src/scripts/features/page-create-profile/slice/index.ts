import { combineReducers } from 'redux';
import stateSlice from './state';
import createRequest from './regRequest';

const reduser = combineReducers({
  stateSlice,
  createRequest,
});

export default reduser;
