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
      .get('/photos')
      .then(pets => {
        dispatch({
          type: LOAD_PETS_SUCCESS,
          payload: pets.data.splice(0, 10)
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
  pets: ['Dog', 'Cat', 'Snake', 'Turtle', 'Rodent'],
  feed: []
};

// Reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PETS_REQ:
      return {
        ...state,
        isFeedLoading: true
      };
    case LOAD_PETS_SUCCESS:
      return {
        ...state,
        isFeedLoading: false,
        feed: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
