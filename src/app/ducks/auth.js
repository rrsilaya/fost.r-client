import axios from 'axios';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const LOGIN_REQ = 'LOGIN_REQ';
const LOGIN_SUC = 'LOGIN_SUC';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT_REQ = 'LOGOUT_REQ';
const LOGOUT_SUC = 'LOGOUT_SUC';
const CHECK_AUTH_REQ = 'CHECK_AUTH_REQ';
const CHECK_AUTH_SUC = 'CHECK_AUTH_SUC';
const CHECK_AUTH_FAIL = 'CHECK_AUTH_FAIL';
const CLEAR_NOTIF = 'CLEAR_NOTIF';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const login = (username, password, accountType) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQ
    });

    axios
      .post(`/login/${accountType}`, {
        Username: username,
        password
      })
      .then(res => {
        dispatch({
          type: LOGIN_SUC,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err
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

export const checkAuth = () => {
  return dispatch => {
    dispatch({
      type: CHECK_AUTH_REQ
    });

    axios
      .get('/session')
      .then(res => {
        dispatch({
          type: CHECK_AUTH_SUC,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: CHECK_AUTH_FAIL,
          payload: err
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
  isLoading: true,
  accountType: '',
  hasNotification: true,
  loginForm: {
    username: '',
    password: ''
  },
  isLoggingIn: false,
  loginFail: false,
  activeUser: ''
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
        },
        loginFail: false
      };

    case LOGIN_REQ:
      return {
        ...state,
        isLoggingIn: true,
        loginForm: {
          username: '',
          password: ''
        },
        loginFail: false
      };

    case LOGIN_SUC:
      return {
        ...state,
        isLoggingIn: false,
        isAuth: true,
        accountType: action.payload[0],
        activeUser: action.payload[1],
        loginFail: false
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        isAuth: false,
        loginFail: true
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
        accountType: '',
        activeUser: ''
      };

    case CHECK_AUTH_REQ:
      return {
        ...state,
        isLoading: true
      };

    case CHECK_AUTH_SUC:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        accountType: action.payload[0],
        activeUser: action.payload[1]
      };

    case CHECK_AUTH_FAIL:
      return {
        ...state,
        isLoading: false,
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
