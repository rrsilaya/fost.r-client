import axios from 'axios';

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
      .get(`/adopt?_id=${id}`)
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
