import axios from 'axios';
import { notification } from 'uikit';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const CHANGE_REQ = 'CHANGE_REQ';
const CHANGE_SUC = 'CHANGE_SUC';
const CHANGE_FAIL = 'CHANGE_FAIL';
const CLEAR_CREATE = 'CLEAR_CREATE';

// Action Creators
export const changeForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const importData = () => {
  return dispatch => {
    dispatch({
      type: CHANGE_REQ
    });
    axios
      .get('/accounts/MyAccount')
      .then(res => {
        dispatch({
          type: CHANGE_SUC,
          payload: res.data[0]
        });
      })
      .catch(err => {
        dispatch({
          type: CHANGE_FAIL,
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

//submit changeinForm
export const submitChange = form => {
  return dispatch => {
    notification('Saving Changes...');
    axios
      .put('/accounts/MyAccount', form)
      .then(() => {
        notification('You have recently changed your profile info.');
      })
      .catch(() => {
        notification('Something went wrong!');
      });
  };
};

// Initial State
const initialState = {
  usernameExists: false,
  usernameAvailable: false,
  isSearchingUser: false,
  form: {
    firstname: '',
    lastname: '',
    usernameNew: '',
    birthday: '',
    contact: '',
    address: '',
    email: '',
    passwordNew: '',
    prompt: '',
    checkbox: false
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

    case CHANGE_REQ:
      return {
        ...state,
        isCreatingUser: true
      };

    case CHANGE_SUC:
      return {
        ...state,
        isCreatingUser: false,
        createdUser: true,
        form: action.payload
      };

    case CLEAR_CREATE:
      return {
        ...state,
        createdUser: false,
        form: initialState.form,
        isCreatingUser: false
      };

    default:
      return state;
  }
};

export default reducer;
