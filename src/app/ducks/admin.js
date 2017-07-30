import axios from 'axios';
import { modal, notification } from 'uikit';

// Actions
const CHANGE_TAB = 'CHANGE_TAB';
const GET_PETS_REQ = 'GET_PETS_REQ';
const GET_PETS_SUC = 'GET_PETS_SUC';
const GET_PETS_FAIL = 'GET_PETS_FAIL';
const GET_INFO_REQ = 'GET_INFO_REQ';
const GET_INFO_SUC = 'GET_INFO_SUC';
const GET_INFO_FAIL = 'GET_INFO_FAIL';
const UPDATE_FORM = 'UPDATE_FORM';
const ADD_PET_REQ = 'ADD_PET_REQ';
const ADD_PET_SUC = 'ADD_PET_SUC';
const ADD_PET_FAIL = 'ADD_PET_FAIL';
const UPLOAD_INC = 'UPLOAD_INC';

// Action Creators
export const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    payload: tab
  };
};

export const getPets = () => {
  return dispatch => {
    dispatch({
      type: GET_PETS_REQ
    });

    axios
      .get('/pets/myPets')
      .then(res => {
        dispatch({
          type: GET_PETS_SUC,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_PETS_FAIL,
          payload: err
        });
      });
  };
};

export const getInfo = () => {
  return dispatch => {
    dispatch({
      type: GET_INFO_REQ
    });

    axios
      .get('/accounts/MyAccount')
      .then(res => {
        dispatch({
          type: GET_INFO_SUC,
          payload: res.data[0]
        });
      })
      .catch(err => {
        dispatch({
          type: GET_INFO_FAIL,
          payload: err
        });
      });
  };
};

export const addPet = form => {
  return dispatch => {
    dispatch({
      type: ADD_PET_REQ
    });

    let data = new FormData();
    const formKeys = Object.keys(form);

    formKeys.map(key => {
      data.append(key, form[key]);
    });

    let config = {
      onUploadProgress: progressEvent => {
        console.log(progressEvent);
        dispatch({
          type: UPLOAD_INC,
          payload: Math.round(progressEvent.loaded * 100 / progressEvent.total)
        });
      }
    };

    axios
      .post('/pets/myPets', data, config)
      .then(res => {
        modal('#addpet-modal').hide();
        notification('Successfully added pet.', { status: 'success' });
        dispatch({
          type: ADD_PET_SUC
        });
      })
      .catch(err => {
        notification('Failed to add pet.', { status: 'danger' });
        dispatch({
          type: ADD_PET_FAIL,
          payload: err
        });
      });
  };
};

export const updateForm = (name, value) => {
  return {
    type: UPDATE_FORM,
    name,
    value
  };
};

// Initial State
const initialState = {
  activeTab: 'requests',
  isLoading: false,
  hasFailed: false,
  pets: [],

  addForm: {
    name: '',
    kind: 'dog',
    breed: '',
    sex: '',
    birthday: '',
    photos: []
  },
  uploadState: 0,
  isAddingPet: false,

  isGettingInfo: true,
  isGettingInfoFailed: false,
  shelterInfo: {}
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload
      };

    case GET_PETS_REQ:
      return {
        ...state,
        isLoading: true,
        hasFailed: false
      };

    case GET_PETS_SUC:
      return {
        ...state,
        isLoading: false,
        hasFailed: false,
        pets: action.payload
      };

    case GET_PETS_FAIL:
      return {
        ...state,
        isLoading: false,
        hasFailed: true
      };

    case GET_INFO_REQ:
      return {
        ...state,
        isGettingInfo: true
      };

    case GET_INFO_SUC:
      return {
        ...state,
        isGettingInfo: false,
        shelterInfo: action.payload
      };

    case GET_INFO_FAIL:
      return {
        ...state,
        isGettingInfoFailed: true,
        isGettingInfo: false
      };

    case UPDATE_FORM:
      return {
        ...state,
        addForm: {
          ...state.addForm,
          [action.name
            .substr(6, action.name.length)
            .toLowerCase()]: action.value
        }
      };

    case UPLOAD_INC:
      return {
        ...state,
        uploadState: action.payload
      };

    case ADD_PET_REQ:
      return {
        ...state,
        isAddingPet: true,
        uploadState: 0
      };

    case ADD_PET_SUC:
      return {
        ...state,
        isAddingPet: false,
        uploadState: 0,
        addForm: initialState.addForm
      };

    case ADD_PET_FAIL:
      return {
        ...state,
        isAddingPet: false,
        uploadState: 0
      };

    default:
      return state;
  }
};

export default reducer;
