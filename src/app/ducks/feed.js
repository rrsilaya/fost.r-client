import axios from 'axios';

// Actions
const LOAD_PETS_REQ = 'LOAD_PETS_REQ';
const LOAD_PETS_SUCCESS = 'LOAD_PETS_SUCCESS';
const LOAD_PETS_FAIL = 'LOAD_PETS_FAIL';

// Action Creators
export const loadPets = () => {
  return dispatch => {
    dispatch({
      type: LOAD_PETS_REQ
    });

    axios
      .get('/pets/shelters/viewAllPets')
      .then(pets => {
        dispatch({
          type: LOAD_PETS_SUCCESS,
          payload: pets.data
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_PETS_FAIL,
          payload: err
        });
      });
  };
};

export const filterFeed = (filter, key) => {
  return dispatch => {
    dispatch({
      type: LOAD_PETS_REQ
    });

    axios
      .get(key === 'all' ? '/adopt' : `/adopt/?${filter}=${key}`)
      .then(res => {
        dispatch({
          type: LOAD_PETS_SUCCESS,
          payload: res.data.splice(0, 15)
        });
      })
      .catch(err => {
        dispatch({
          type: LOAD_PETS_FAIL,
          payload: err
        });
      });
  };
};

// Initial State
const initialState = {
  isFeedLoading: true,
  hasErrorLoading: false,
  pets: ['Dog', 'Cat', 'Snake', 'Turtle', 'Rodent'],
  feed: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PETS_REQ:
      return {
        ...state,
        isFeedLoading: true,
        hasErrorLoading: false
      };
    case LOAD_PETS_SUCCESS:
      return {
        ...state,
        isFeedLoading: false,
        hasErrorLoading: false,
        feed: action.payload
      };
    case LOAD_PETS_FAIL:
      return {
        ...state,
        isFeedLoading: false,
        hasErrorLoading: true
      };

    default:
      return state;
  }
};

export default reducer;
