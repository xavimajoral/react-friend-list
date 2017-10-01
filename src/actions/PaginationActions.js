import * as types from '../constants/ActionTypes';

export default function changePagination(pageItems, currentPage) {
  return {
    type: types.CHANGE_PAGINATION,
    pageItems,
    currentPage
  };
}