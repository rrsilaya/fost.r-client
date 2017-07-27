import axios from 'axios';

// Actions
const CHANGE_TAB = 'CHANGE_TAB';
const GET_PETS_REQ = 'GET_PETS_REQ';
const GET_PETS_SUC = 'GET_PETS_SUC';
const GET_PETS_FAIL = 'GET_PETS_FAIL';

// Action Creators
export const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    payload: tab
  };
};

export const getPets = () => {
  return dispatch => {
    dispatch({
      type: GET_PETS_REQ
    });

    axios
      .get('/adopt')
      .then(res => {
        dispatch({
          type: GET_PETS_SUC,
          payload: res.data.splice(0, 10)
        });
      })
      .catch(err => {
        dispatch({
          type: GET_PETS_FAIL,
          payload: err
        });
      });
  };
};

// Initial State
const initialState = {
  activeTab: 'requests',
  isLoading: false,
  hasFailed: false,
  pets: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload
      };

    case GET_PETS_REQ:
      return {
        ...state,
        isLoading: true,
        hasFailed: false
      };

    case GET_PETS_SUC:
      return {
        ...state,
        isLoading: false,
        hasFailed: false,
        pets: action.payload
      };

    case GET_PETS_FAIL:
      return {
        ...state,
        isLoading: false,
        hasFailed: true
      };

    default:
      return state;
  }
};

export default reducer;
