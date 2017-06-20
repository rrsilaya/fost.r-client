import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import auth from './ducks/auth';

const initialState = {
  auth: true
};

const store = createStore(
  combineReducers({
    auth

    // Update this with all the reducers
    // to be used in the project
  }),
  initialState,
  applyMiddleware(thunk, logger)
);

export default store;
