// Actions
const LOGOUT_REQ = 'LOGOUT_REQ';
const CLEAR_NOTIF = 'CLEAR_NOTIF';

// Action Creators
export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQ
    });
  };
};

export const clearNotif = () => {
  return {
    type: CLEAR_NOTIF
  };
};

// Initial State
const initialState = {
  isAuth: true,
  isLoading: false,
  accountType: 'shelter',
  hasNotification: true
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

    case CLEAR_NOTIF:
      return {
        ...state,
        hasNotification: false
      };

    default:
      return state;
  }
};

export default reducer;
