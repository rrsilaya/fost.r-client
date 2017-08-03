import axios from 'axios';
import { modal, notification } from 'uikit';

// Actions
const GET_POST_DATA_REQ = 'GET_POST_DATA_REQ';
const GET_POST_DATA_SUC = 'GET_POST_DATA_SUC';
const GET_POST_DATA_FAIL = 'GET_POST_DATA_FAIL';
const GET_COMMENTS_REQ = 'GET_COMMENTS_REQ';
const GET_COMMENTS_SUC = 'GET_COMMENTS_SUC';
const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';
const UPDATE_FORM = 'UPDATE_FORM';
const REPLY_SUC = 'REPLY_SUC';
const CLEAR_FORM = 'CLEAR_FORM';

// Action Creators
export const getPostData = id => {
  return dispatch => {
    dispatch({
      type: GET_POST_DATA_REQ
    });

    axios
      .get(`/api/community/${id}`)
      .then(res => {
        dispatch({
          type: GET_POST_DATA_SUC,
          payload: res.data[0][0]
        });
      })
      .catch(err => {
        dispatch({
          type: GET_POST_DATA_FAIL,
          payload: err
        });
      });
  };
};

export const getPostComments = id => {
  return dispatch => {
    dispatch({
      type: GET_COMMENTS_REQ
    });

    axios
      .get(`/api/community/viewAllComments/${id}`)
      .then(res => {
        dispatch({
          type: GET_COMMENTS_SUC,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_COMMENTS_FAIL,
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

export const replyToPost = (id, title, content) => {
  return dispatch => {
    modal('#reply-form-modal').hide();
    notification('Sending your reply...');

    axios
      .post(`/api/community/${id}`, {
        comment_title: title,
        comment_body: content
      })
      .then(res => {
        notification('Successfully sent your reply.', { status: 'success' });
        dispatch({
          type: REPLY_SUC
        });
      })
      .catch(err => {
        notification('Failed to send your reply.', { status: 'danger' });
        modal('#reply-form-modal').show();
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
  isGettingData: true,
  isGettingDataFailed: false,
  activePost: {},
  isLoadingComments: true,
  isLoadingCommentsFailed: false,
  comments: [],
  replyForm: {
    title: '',
    content: ''
  }
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_DATA_REQ:
      return {
        ...state,
        isGettingData: true,
        isGettingDataFailed: false,
        activePost: {}
      };

    case GET_POST_DATA_SUC:
      return {
        ...state,
        isGettingData: false,
        isGettingFailed: false,
        activePost: action.payload
      };

    case GET_POST_DATA_FAIL:
      return {
        ...state,
        isGettingData: false,
        isGettingDataFailed: true,
        activePost: {}
      };

    case GET_COMMENTS_REQ:
      return {
        ...state,
        isLoadingComments: true,
        isLoadingCommentsFailed: false,
        comments: []
      };

    case GET_COMMENTS_SUC:
      return {
        ...state,
        isLoadingComments: false,
        isLoadingCommentsFailed: false,
        comments: action.payload
      };

    case GET_COMMENTS_FAIL:
      return {
        ...state,
        isLoadingComments: false,
        isLoadingCommentsFailed: true,
        comments: []
      };

    case UPDATE_FORM:
      return {
        ...state,
        replyForm: {
          title: action.name === 'title' ? action.value : state.replyForm.title,
          content: action.name === 'content'
            ? action.value
            : state.replyForm.content
        }
      };

    case REPLY_SUC:
      return {
        ...state,
        replyForm: initialState.replyForm
      };

    case CLEAR_FORM:
      return {
        ...state,
        replyForm: initialState.replyForm
      };

    default:
      return state;
  }
};

export default reducer;
