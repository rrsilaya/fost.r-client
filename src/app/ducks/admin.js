import axios from 'axios';

// Actions
const CHANGE_TAB = 'CHANGE_TAB';
const GET_PETS_REQ = 'GET_PETS_REQ';
const GET_PETS_SUC = 'GET_PETS_SUC';
const GET_PETS_FAIL = 'GET_PETS_FAIL';
const GET_INFO_REQ = 'GET_INFO_REQ';
const GET_INFO_SUC = 'GET_INFO_SUC';
const GET_INFO_FAIL = 'GET_INFO_FAIL';

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

// Initial State
const initialState = {
  activeTab: 'requests',
  isLoading: false,
  hasFailed: false,
  pets: [],

  isAddingPet: true,
  addForm: {},

  isGettingInfo: true,
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

    default:
      return state;
  }
};

export default reducer;
