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

export const submitRequest = date => {
  return dispatch => {
    dispatch({
      type: SUBMIT_REQ
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
