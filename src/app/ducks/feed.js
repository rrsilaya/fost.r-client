import axios from 'axios';

// Actions
const LOAD_PETS_REQ = 'LOAD_PETS_REQ';
const LOAD_PETS_SUCCESS = 'LOAD_PETS_SUCCESS';
const LOAD_PETS_FAIL = 'LOAD_PETS_FAIL';
const GET_DATA_REQ = 'GET_DATA_REQ';
const GET_DATA_SUC = 'GET_DATA_SUC';
const APPEND_REQ = 'APPEND_REQ';
const APPEND_SUC = 'APPEND_SUC';

// Action Creators
export const loadPets = () => {
  return dispatch => {
    dispatch({
      type: LOAD_PETS_REQ
    });

    axios
      .get('/api/pets/shelters/viewAllPets/page/1')
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

export const getMorePets = page => {
  return dispatch => {
    dispatch({
      type: APPEND_REQ
    });

    axios.get(`/api/pets/shelters/viewAllPets/page/${page}`).then(pets => {
      dispatch({
        type: APPEND_SUC,
        payload: pets.data
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

export const getQuickData = id => {
  return dispatch => {
    dispatch({
      type: GET_DATA_REQ
    });

    axios.get(`/api/pets/${id}`).then(res => {
      dispatch({
        type: GET_DATA_SUC,
        payload: res.data
      });
    });
  };
};

// Initial State
const initialState = {
  isFeedLoading: true,
  hasErrorLoading: false,
  pets: ['Dog', 'Cat', 'Bird', 'Others'],
  feed: [],
  feedPagination: 1,
  feedPageTotal: 1,
  isAppending: false,

  quickData: {},
  isGettingQuickData: true
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
        feed: action.payload.pets,
        feedPagination: parseInt(action.payload.page, 10),
        feedPageTotal: action.payload.pageTotal
      };

    case LOAD_PETS_FAIL:
      return {
        ...state,
        isFeedLoading: false,
        hasErrorLoading: true
      };

    case GET_DATA_REQ:
      return {
        ...state,
        isGettingQuickData: true,
        quickData: {}
      };

    case GET_DATA_SUC:
      return {
        ...state,
        isGettingQuickData: false,
        quickData: action.payload
      };

    case APPEND_REQ:
      return {
        ...state,
        isAppending: true
      };

    case APPEND_SUC:
      return {
        ...state,
        isAppending: false,
        feed: [...state.feed, ...action.payload.pets],
        feedPagination: state.feedPagination + 1
      };

    default:
      return state;
  }
};

export default reducer;
