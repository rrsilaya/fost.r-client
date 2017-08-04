import axios from 'axios';
import { notification } from 'uikit';

// Actions
const PROFILE_REQ = 'PROFILE_REQ';
const PROFILE_SUC = 'PROFILE_SUC';
const PROFILE_FAIL = 'PROFILE_FAIL';

// Action Creators
export const loadProfile = id => {
  return dispatch => {
    dispatch({
      type: PROFILE_REQ
    });

    axios
      .get(`/api/pets/${id}`)
      .then(res => {
        dispatch({
          type: PROFILE_SUC,
          payload: res.data[0]
        });
      })
      .catch(err => {
        dispatch({
          type: PROFILE_FAIL
        });
      });
  };
};

export const requestAdopt = id => {
  return dispatch => {
    notification('Sending adopt request...');

    axios
      .post(`/api/pets/adopt/${id}`, {})
      .then(() => {
        notification('Successfully sent adopt request.', { status: 'success' });
      })
      .catch(() => {
        notification('Failed to send adopt request.', { status: 'danger' });
      });
  };
};

// Initial State
const initialState = {
  isLoading: true
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQ:
      return initialState;

    case PROFILE_SUC:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
