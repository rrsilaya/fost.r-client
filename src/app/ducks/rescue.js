import axios from 'axios';
import { notification } from 'uikit';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const INC_PROGRESS = 'INC_PROGRESS';
const RESCUE_REQ = 'RESCUE_REQ';
const RESCUE_SUC = 'RESCUE_SUC';
const RESCUE_FAIL = 'RESCUE_FAIL';

// Action Creators
export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

export const sendRescue = form => {
  return dispatch => {
    dispatch({
      type: RESCUE_REQ
    });

    let data = new FormData();
    const formKeys = Object.keys(form);

    formKeys.map(key => {
      data.append(key, form[key]);
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
      .post('/rescue/submit_a_rescue_request', data, config)
      .then(() => {
        notification('Successfully submitted rescue tip.', {
          status: 'success'
        });
        dispatch({
          type: RESCUE_SUC
        });
      })
      .catch(() => {
        notification('Failed to submit rescue tip.', { status: 'danger' });
        dispatch({
          type: RESCUE_FAIL
        });
      });
  };
};

// Initial State
const initialState = {
  requests: [],
  form: {
    content: '',
    checked: false,
    files: []
  },

  isSending: false,
  progress: 10
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

    case INC_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };

    case RESCUE_REQ:
      return {
        ...state,
        isSending: true
      };

    case RESCUE_SUC:
      return {
        ...state,
        form: initialState.form,
        isSending: false,
        progress: 0
      };

    case RESCUE_FAIL:
      return {
        ...state,
        isSending: false,
        progress: 0
      };

    default:
      return state;
  }
};

export default reducer;
