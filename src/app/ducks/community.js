import axios from 'axios';
import { notification, modal } from 'uikit';

// Actions
const LOAD_ACTIVE_POSTS_REQ = 'LOAD_ACTIVE_POSTS_REQ';
const LOAD_ACTIVE_POSTS_SUC = 'LOAD_ACTIVE_POSTS_SUC';
const LOAD_ACTIVE_POSTS_FAIL = 'LOAD_ACTIVE_POSTS_FAIL';
const LOAD_FEED_POSTS_REQ = 'LOAD_FEED_POSTS_REQ';
const LOAD_FEED_POSTS_SUC = 'LOAD_FEED_POSTS_SUC';
const LOAD_FEED_POSTS_FAIL = 'LOAD_FEED_POSTS_FAIL';
const CHANGE_TAB = 'CHANGE_TAB';
const UPDATE_FORM = 'UPDATE_FORM';
const ADD_POST_SUC = 'ADD_POST_SUC';
const DELETE_POST_SUC = 'DELETE_POST_SUC';
const CLEAR_FORM = 'CLEAR_FORM';

// Action Creators
export const handleTabChange = activeTab => {
  return {
    type: CHANGE_TAB,
    payload: activeTab
  };
};

export const getActivePosts = user => {
  return dispatch => {
    dispatch({
      type: LOAD_ACTIVE_POSTS_REQ
    });

    axios
      .get('/community/fostr/viewPosts')
      .then(res => {
        dispatch({
          type: LOAD_ACTIVE_POSTS_SUC,
          payload: res.data
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

export const getFeedPosts = category => {
  return dispatch => {
    dispatch({
      type: LOAD_FEED_POSTS_REQ
    });

    axios
      .get(
        `${category === 'featured'
          ? '/community/sortByVotesDesc/page/1'
          : category === 'unanswered'
            ? '/community/sortByCommentsAsc/page/1'
            : '/community/sortByTimeDesc/page/1'}`
      )
      .then(res => {
        dispatch({
          type: LOAD_FEED_POSTS_SUC,
          payload: res.data
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

export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const addPost = (post_title, text_post) => {
  return dispatch => {
    notification('Creating post...');
    modal('#newpost').hide();

    axios
      .post('/community/addPost', {
        post_title,
        text_post
      })
      .then(res => {
        notification('Post successfully created.', { status: 'success' });
        dispatch({
          type: ADD_POST_SUC
        });
      })
      .catch(err => {
        notification('Post creation failed.', { status: 'danger' });
        modal('#newpost').show();
      });
  };
};

export const deletePost = id => {
  return dispatch => {
    axios
      .delete(`/community/${id}`)
      .then(() => {
        notification('Successfully deleted post.', { status: 'success' });
        dispatch({
          type: DELETE_POST_SUC
        });
      })
      .catch(() => {
        notification('Failed to delete post.', { status: 'danger' });
      });
  };
};

export const resetForm = () => {
  return {
    type: CLEAR_FORM
  };
};

// Initial State
const initialState = {
  activeTab: 'new',

  isGettingActivePosts: true,
  isGettingActivePostsFailed: false,
  userActivePosts: [],

  isGettingFeedPosts: true,
  isGettingFeedPostsFailed: false,
  userFeedPosts: [],
  feedPagination: 1,
  feedPageTotal: 1,

  form: {
    newTitle: '',
    newContent: ''
  },

  deleteSuccess: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload
      };

    case LOAD_ACTIVE_POSTS_REQ:
      return {
        ...state,
        isGettingActivePosts: true,
        isGettingActivePostsFailed: false,
        deleteSuccess: false
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
        userFeedPosts: action.payload.posts,
        feedPagination: parseInt(action.payload.page),
        feedPageTotal: action.payload.pageTotal
      };

    case LOAD_FEED_POSTS_FAIL:
      return {
        ...state,
        isGettingFeedPosts: false,
        isGettingFeedPostsFailed: true
      };

    case UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value
        }
      };

    case ADD_POST_SUC:
      return {
        ...state,
        form: initialState.form
      };

    case DELETE_POST_SUC:
      return {
        ...state,
        deleteSuccess: true
      };

    case CLEAR_FORM:
      return {
        ...state,
        form: initialState.form
      };

    default:
      return state;
  }
};

export default reducer;
