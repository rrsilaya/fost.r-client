import axios from 'axios';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const CHANGE_REQ = 'CHANGE_REQ';
const CHANGE_SUC = 'CHANGE_SUC';
const CHANGE_FAIL = 'CHANGE_FAIL';
const CLEAR_CREATE = 'CLEAR_CREATE';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const CHANGE = form => {
  return dispatch => {
    dispatch({
      type: CHANGE_REQ
    });
    console.log(form);
    axios
      .post('/signup/user', form)
      .then(res => {
        dispatch({
          type: CHANGE_SUC
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
        form: initialState.form
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
