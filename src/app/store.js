import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import auth from './ducks/auth';
import feed from './ducks/feed';
import petProfile from './ducks/pet-profile';
import community from './ducks/community';
import communityPost from './ducks/community-post';
import notifications from './ducks/notifications';

const store = createStore(
  combineReducers({
    auth,
    feed,
    petProfile,
    community,
    communityPost,
    notifications
    // Update this with all the reducers
    // to be used in the project
  }),
  {},
  applyMiddleware(thunk, logger)
);

export default store;
