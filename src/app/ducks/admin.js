// Actions
const CHANGE_TAB = 'CHANGE_TAB';

// Action Creators
export const changeTab = tab => {
  return {
    type: CHANGE_TAB,
    payload: tab
  };
};

// Initial State
const initialState = {
  activeTab: 'requests'
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        activeTab: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
