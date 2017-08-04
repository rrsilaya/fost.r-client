import axios from 'axios';

// Actions
const GET_NOTIF_REQ = 'GET_NOTIF_REQ';
const GET_NOTIF_SUC = 'GET_NOTIF_SUC';

// Action Creators
export const getNotifications = () => {
  return dispatch => {
    dispatch({
      type: GET_NOTIF_REQ
    });

    axios.get('/api/notifications').then(res => {
      dispatch({
        type: GET_NOTIF_SUC,
        payload: res.data
      });
    });
  };
};

// Initial State
const initialState = {
  isLoading: true,
  hasFailed: false,
  notifications: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIF_REQ:
      return {
        ...state,
        isLoading: true,
        hasFailed: false
      };

    case GET_NOTIF_SUC:
      return {
        ...state,
        isLoading: false,
        hasFailed: false,
        notifications: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
