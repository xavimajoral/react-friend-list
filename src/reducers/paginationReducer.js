import * as types from '../constants/ActionTypes';

const initialState = {
  pageItems: []
};

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_PAGINATION:
      let pageItems = action.pageItems;
      return {
        ...state,
        pageItems: pageItems
      };
    default:
      return state;
  }
}