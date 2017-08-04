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
import petDate from './ducks/pet-date';
import admin from './ducks/admin';
import signup from './ducks/signup';
import updateProfile from './ducks/updateProfile';

const store = createStore(
  combineReducers({
    auth,
    feed,
    petProfile,
    community,
    communityPost,
    notifications,
    petDate,
    admin,
    signup,
    updateProfile
    // Update this with all the reducers
    // to be used in the project
  }),
  {},
  applyMiddleware(thunk, logger)
);

export default store;
