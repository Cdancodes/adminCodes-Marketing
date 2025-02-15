
import { SET_DATA, SET_SEARCH_QUERY, SET_CURRENT_PAGE } from '../actionTypes';
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});
export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
