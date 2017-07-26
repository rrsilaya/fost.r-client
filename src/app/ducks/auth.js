// Actions
const LOGOUT_REQ = 'LOGOUT_REQ';

// Action Creators
export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQ
    });
  };
};

// Initial State
const initialState = {
  isAuth: true,
  isLoading: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_REQ:
      return {
        ...state,
        isLoading: true,
        isAuth: false
      };

    default:
      return state;
  }
};

export default reducer;
