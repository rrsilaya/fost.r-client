import axios from 'axios';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const LOGIN_REQ = 'LOGIN_REQ';
const LOGIN_SUC = 'LOGIN_SUC';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_REQ = 'LOGOUT_REQ';
const LOGOUT_SUC = 'LOGOUT_SUC';
const CLEAR_NOTIF = 'CLEAR_NOTIF';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const login = (username, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQ
    });

    axios
      .post('/login/user', {
        Username: username,
        password
      })
      .then(res => {
        dispatch({
          type: LOGIN_SUC,
          payload: res.data
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQ
    });

    axios.get('/logout').then(res => {
      dispatch({
        type: LOGOUT_SUC
      });
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
  accountType: '',
  hasNotification: true,
  loginForm: {
    username: '',
    password: ''
  },
  isLoggingIn: false
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

    case LOGIN_REQ:
      return {
        ...state,
        isLoggingIn: true,
        loginForm: {
          username: '',
          password: ''
        }
      };

    case LOGIN_SUC:
      return {
        ...state,
        isLoggingIn: false,
        isAuth: true,
        accountType: action.payload
      };

    case LOGOUT_REQ:
      return {
        ...state,
        isLoading: true
      };

    case LOGOUT_SUC:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        accountType: ''
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
