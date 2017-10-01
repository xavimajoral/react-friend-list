import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      name: 'George Washington',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            sex: action.sex
          }
        ],
      };
    case types.DELETE_FRIEND:
      const updatedIndexDel = action.id + (action.currentPage - 1)*2;
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== updatedIndexDel)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      const updatedIndex = action.id + (action.currentPage - 1)*2;
      let friend = friends.find((item, index) => index === updatedIndex);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    default:
      return state;
  }
}
