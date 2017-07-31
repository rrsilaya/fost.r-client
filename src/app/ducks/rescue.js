// Actions
const UPDATE_FORM = 'UPDATE_FORM';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

// Initial State
const initialState = {
  requests: [],
  form: {
    content: '',
    checked: false,
    files: []
  }
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

    default:
      return state;
  }
};

export default reducer;
