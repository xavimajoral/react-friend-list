import * as types from '../constants/ActionTypes';

export function addFriend(name, sex) {
  return {
    type: types.ADD_FRIEND,
    name,
    sex
  };
}

export function deleteFriend(id, currentPage) {
  return {
    type: types.DELETE_FRIEND,
    id,
    currentPage
  };
}

export function starFriend(id, currentPage) {
  return {
    type: types.STAR_FRIEND,
    id,
    currentPage
  };
}
