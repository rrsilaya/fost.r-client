import axios from 'axios';
import { notification } from 'uikit';

// Actions
const UPDATE_FORM = 'UPDATE_FORM';
const INC_PROGRESS = 'INC_PROGRESS';
const RESCUE_REQ = 'RESCUE_REQ';
const RESCUE_SUC = 'RESCUE_SUC';
const RESCUE_FAIL = 'RESCUE_FAIL';
const GET_RESCUE_REQ = 'GET_RESCUE_REQ';
const GET_RESCUE_SUC = 'GET_RESCUE_SUC';
const DELETE_SUC = 'DELETE_SUC';

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
      .post('/api/rescue/submit_a_rescue_request', data, config)
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

export const loadRequests = () => {
  return dispatch => {
    dispatch({
      type: GET_RESCUE_REQ
    });

    axios.get('/api/rescue').then(res => {
      dispatch({
        type: GET_RESCUE_SUC,
        payload: res.data
      });
    });
  };
};

export const deleteRequest = id => {
  return dispatch => {
    notification('Deleting request...');

    axios
      .delete(`/api/rescue/${id}`)
      .then(() => {
        notification('Successfully deleted rescue request.', {
          status: 'success'
        });
        dispatch({
          type: DELETE_SUC,
          payload: id
        });
      })
      .catch(() => {
        notification('Failed to delete rescue request.', { status: 'danger' });
      });
  };
};

// Initial State
const initialState = {
  requests: [],
  isGettingRequests: true,

  form: {
    content: '',
    checked: false,
    files: []
  },

  isSending: false,
  progress: 0
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

    case GET_RESCUE_REQ:
      return {
        ...state,
        isGettingRequests: true
      };

    case GET_RESCUE_SUC:
      return {
        ...state,
        isGettingRequests: false,
        requests: action.payload
      };

    case DELETE_SUC:
      return {
        ...state,
        requests: state.requests.filter(
          rescue => rescue.rescue_uuid !== action.payload
        )
      };

    default:
      return state;
  }
};

export default reducer;
