import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import searchReducer from './searchReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  searchReducer
});

export default rootReducer;
