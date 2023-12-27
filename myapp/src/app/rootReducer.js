import { combineReducers } from 'redux';
import launchesReducer from './modules/launches';
import rocketsReducer from './modules/rockets';

const rootReducer = combineReducers({
  launches: launchesReducer,
  rockets: rocketsReducer,
  // Other reducers if present
});

export default rootReducer;
