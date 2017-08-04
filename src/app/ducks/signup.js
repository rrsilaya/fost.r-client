import axios from 'axios';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const REGISTER_REQ = 'REGISTER_REQ';
const REGISTER_SUC = 'REGISTER_SUC';
const REGISTER_FAIL = 'REGISTER_FAIL';
const CLEAR_CREATE = 'CLEAR_CREATE';
const INC_PROGRESS = 'INC_PROGRESS';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const register = (accountType, form) => {
  return dispatch => {
    dispatch({
      type: REGISTER_REQ
    });

    const config = {
      onUploadProgress: progressEvent => {
        dispatch({
          type: INC_PROGRESS,
          payload: Math.round(progressEvent.loaded * 100 / progressEvent.total)
        });
      }
    };

    axios
      .post(`/api/signup/${accountType}`, form, config)
      .then(res => {
        dispatch({
          type: REGISTER_SUC,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err
        });
      });
  };
};

export const clearCreate = () => {
  return {
    type: CLEAR_CREATE
  };
};

// Initial State
const initialState = {
  usernameExists: false,
  usernameAvailable: false,
  isSearchingUser: false,
  form: {
    accountType: 'user',
    firstname: '',
    lastname: '',
    usernameNew: '',
    birthday: '',
    contact: '',
    address: '',
    email: '',
    passwordNew: '',
    prompt: '',
    checkbox: false,

    shelterName: '',
    shelterFile: null,
    progress: 0
  },
  isCreatingUser: false,
  createdUser: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value
        }
      };

    case REGISTER_REQ:
      return {
        ...state,
        isCreatingUser: true
      };

    case REGISTER_SUC:
      return {
        ...state,
        isCreatingUser: false,
        createdUser: true,
        form: initialState.form
      };

    case CLEAR_CREATE:
      return {
        ...state,
        createdUser: false,
        form: initialState.form,
        isCreatingUser: false
      };

    case INC_PROGRESS:
      return {
        ...state,
        form: {
          ...state.form,
          progress: action.payload
        }
      };

    default:
      return state;
  }
};

export default reducer;
