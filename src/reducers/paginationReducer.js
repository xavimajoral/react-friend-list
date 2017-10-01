import * as types from '../constants/ActionTypes';

const initialState = {
  currentPage: null,
  pageItems: []
};

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_PAGINATION:
      let { pageItems, currentPage } = action;
      return {
        ...state,
        pageItems: pageItems,
        currentPage: currentPage
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        currentPage: 1
      };
    default:
      return state;
  }
}