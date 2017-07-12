import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import auth from './ducks/auth';
import feed from './ducks/feed';

const store = createStore(
  combineReducers({
    auth,
    feed

    // Update this with all the reducers
    // to be used in the project
  }),
  {},
  applyMiddleware(thunk, logger)
);

export default store;
