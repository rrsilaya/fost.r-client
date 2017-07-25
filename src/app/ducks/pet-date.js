// Actions
const SET_DATE = 'SET_DATE';

// Action Creators
export const setDate = date => {
  return {
    type: SET_DATE,
    payload: date
  };
};

// Initial State
const initialState = {
  date: ''
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
