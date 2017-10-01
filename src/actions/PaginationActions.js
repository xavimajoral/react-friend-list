import * as types from '../constants/ActionTypes';

export default function changePagination(pageItems) {
  return {
    type: types.CHANGE_PAGINATION,
    pageItems
  };
}