import changePagination from '../actions/PaginationActions';
import * as types from '../constants/ActionTypes';

describe('Pagination Action', () => {

  it('should create an action to change the pagination', () => {
    const pageItems = [
      {
        name: 'Theodore Roosevelt',
        starred: false
      },
      {
        name: 'Abraham Lincoln',
        starred: false
      }
    ];

    const currentPage = 1;

    const expectedAction = {
      type: types.CHANGE_PAGINATION,
      pageItems,
      currentPage
    };

    expect(changePagination(pageItems, currentPage)).to.eql(expectedAction)
  });

});
