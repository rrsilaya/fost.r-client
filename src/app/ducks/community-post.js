import axios from 'axios';

// Actions
const GET_POST_DATA_REQ = 'GET_POST_DATA_REQ';
const GET_POST_DATA_SUC = 'GET_POST_DATA_SUC';
const GET_POST_DATA_FAIL = 'GET_POST_DATA_FAIL';
const GET_COMMENTS_REQ = 'GET_COMMENTS_REQ';
const GET_COMMENTS_SUC = 'GET_COMMENTS_SUC';
const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';
const UPDATE_FORM = 'UPDATE_FORM';

// Action Creators
export const getPostData = id => {
  return dispatch => {
    dispatch({
      type: GET_POST_DATA_REQ
    });

    axios
      .get(`/community/${id}`)
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
      .get(`/community/${id}/viewAllComments`)
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

    default:
      return state;
  }
};

export default reducer;
