import axios from 'axios';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const REGISTER_REQ = 'REGISTER_REQ';
const REGISTER_SUC = 'REGISTER_SUC';
const REGISTER_FAIL = 'REGISTER_FAIL';
const CLEAR_CREATE = 'CLEAR_CREATE';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const register = form => {
  return dispatch => {
    dispatch({
      type: REGISTER_REQ
    });
    console.log(form);
    axios
      .post('/signup/user', form)
      .then(res => {
        dispatch({
          type: REGISTER_SUC
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
    firstname: '',
    lastname: '',
    username: '',
    birthday: '',
    contact: '',
    address: '',
    email: '',
    password: '',
    checkbox: false
  },
  isCreatingUser: false,
  createdUser: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      let updatedForm = state.form;
      updatedForm[action.name] = action.value;

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

    default:
      return state;
  }
};

export default reducer;
