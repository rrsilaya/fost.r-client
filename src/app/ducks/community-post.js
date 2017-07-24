import axios from 'axios';

// Actions
const GET_POST_DATA_REQ = 'GET_POST_DATA_REQ';
const GET_POST_DATA_SUC = 'GET_POST_DATA_SUC';
const GET_POST_DATA_FAIL = 'GET_POST_DATA_FAIL';

// Action Creators
export const getPostData = id => {
  return dispatch => {
    dispatch({
      type: GET_POST_DATA_REQ
    });

    axios
      .get(`/community?_id=${id}`)
      .then(res => {
        dispatch({
          type: GET_POST_DATA_SUC,
          payload: res.data[0]
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

// Initial State
const initialState = {
  isGettingData: true,
  isGettingDataFailed: false,
  activePost: {}
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

    default:
      return state;
  }
};

export default reducer;
