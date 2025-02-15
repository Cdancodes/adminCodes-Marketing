// redux/reducers/reducer.js
import { SET_DATA, SET_SEARCH_QUERY, SET_CURRENT_PAGE } from '../actionTypes';

const initialState = {
  data: [],
  searchQuery: '',
  currentPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default reducer;
