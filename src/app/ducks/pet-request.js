import axios from 'axios';

// Actions
const LOAD_DATA_REQ = 'LOAD_DATA_REQ';
const LOAD_DATA_FAIL = 'LOAD_DATA_FAIL';
const LOAD_DATA_SUC = 'LOAD_DATA_SUC';

// Action Creators
export const loadPetData = id => {
  return dispatch => {
    dispatch({
      type: LOAD_DATA_REQ
    });

    axios
      .get(`/adopt?_id=${id}`)
      .then(res => {
        dispatch({
          type: LOAD_DATA_SUC,
          payload: res.data[0].name
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_DATA_FAIL
        });
      });
  };
};

// Inital State
const initialState = {
  isGettingData: true,
  hasFailed: false,
  petData: ''
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_REQ:
      return {
        ...state,
        isGettingData: true
      };

    case LOAD_DATA_SUC:
      return {
        ...state,
        isGettingData: false,
        petData: action.payload
      };

    case LOAD_DATA_FAIL:
      return {
        ...state,
        isGettingData: false,
        hasFailed: true
      };

    default:
      return state;
  }
};

export default reducer;
