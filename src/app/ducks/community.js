import axios from 'axios';

// Actions
const LOAD_ACTIVE_POSTS_REQ = 'LOAD_ACTIVE_POSTS_REQ';
const LOAD_ACTIVE_POSTS_SUC = 'LOAD_ACTIVE_POSTS_SUC';
const LOAD_ACTIVE_POSTS_FAIL = 'LOAD_ACTIVE_POSTS_FAIL';
const LOAD_FEED_POSTS_REQ = 'LOAD_FEED_POSTS_REQ';
const LOAD_FEED_POSTS_SUC = 'LOAD_FEED_POSTS_SUC';
const LOAD_FEED_POSTS_FAIL = 'LOAD_FEED_POSTS_FAIL';

// Action Creators
export const getActivePosts = () => {
  return dispatch => {
    dispatch({
      type: LOAD_ACTIVE_POSTS_REQ
    });

    axios
      .get('/community')
      .then(res => {
        dispatch({
          type: LOAD_ACTIVE_POSTS_SUC,
          payload: res.data.splice(0, 3)
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_ACTIVE_POSTS_FAIL,
          payload: err
        });
      });
  };
};

export const getFeedPosts = () => {
  return dispatch => {
    dispatch({
      type: LOAD_FEED_POSTS_REQ
    });

    axios
      .get('/community')
      .then(res => {
        dispatch({
          type: LOAD_FEED_POSTS_SUC,
          payload: res.data.splice(4, 20)
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_FEED_POSTS_FAIL,
          payload: err
        });
      });
  };
};

// Initial State
const initialState = {
  isGettingActivePosts: true,
  isGettingActivePostsFailed: false,
  userActivePosts: [],

  isGettingFeedPosts: true,
  isGettingFeedPostsFailed: false,
  userFeedPosts: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ACTIVE_POSTS_REQ:
      return {
        ...state,
        isGettingActivePosts: true,
        isGettingActivePostsFailed: false
      };

    case LOAD_ACTIVE_POSTS_SUC:
      return {
        ...state,
        isGettingActivePosts: false,
        isGettingActivePostsFailed: false,
        userActivePosts: action.payload
      };

    case LOAD_ACTIVE_POSTS_FAIL:
      return {
        ...state,
        isGettingActivePosts: false,
        isGettingActivePostsFailed: true
      };

    case LOAD_FEED_POSTS_REQ:
      return {
        ...state,
        isGettingFeedPosts: true,
        isGettingFeedPostsFailed: false
      };

    case LOAD_FEED_POSTS_SUC:
      return {
        ...state,
        isGettingFeedPosts: false,
        isGettingFeedPostsFailed: false,
        userFeedPosts: action.payload
      };

    case LOAD_FEED_POSTS_FAIL:
      return {
        ...state,
        isGettingFeedPosts: false,
        isGettingFeedPostsFailed: true
      };

    default:
      return state;
  }
};

export default reducer;
