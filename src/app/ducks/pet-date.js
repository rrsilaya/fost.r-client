import axios from 'axios';
import { notification } from 'uikit';

// Actions
const SET_DATE = 'SET_DATE';
const SUBMIT_REQ = 'SUBMIT_REQ';
const SUBMIT_SUC = 'SUBMIT_SUC';

// Action Creators
export const setDate = date => {
  return {
    type: SET_DATE,
    payload: date
  };
};

export const submitRequest = (id, date) => {
  return dispatch => {
    notification('Sending date request...');
    dispatch({
      type: SUBMIT_REQ
    });

    axios
      .post(`/pets/dates/${id}`, { date })
      .then(() => {
        notification('Successfully sent date request.', { status: 'success' });
        dispatch({
          type: SUBMIT_SUC
        });
      })
      .catch(() => {
        notification('Failed to send date request.', { status: 'danger' });
      });
  };
};

// Initial State
const initialState = {
  date: '',
  isLoading: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload
      };

    case SUBMIT_REQ:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
};

export default reducer;
