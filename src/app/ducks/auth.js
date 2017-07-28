// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const LOGIN_REQ = 'LOGIN_REQ';
const LOGIN_SUC = 'LOGIN_SUC';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_REQ = 'LOGOUT_REQ';
const CLEAR_NOTIF = 'CLEAR_NOTIF';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

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
  isAuth: false,
  isLoading: false,
  accountType: 'shelter',
  hasNotification: true,
  loginForm: {
    username: '',
    password: ''
  }
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        loginForm: {
          username: action.name === 'username'
            ? action.value
            : state.loginForm.username,
          password: action.name === 'password'
            ? action.value
            : state.loginForm.password
        }
      };

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
