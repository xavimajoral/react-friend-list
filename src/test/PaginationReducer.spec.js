import reducer from '../reducers/paginationReducer';

describe('Pagination Reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      currentPage: null,
      pageItems: []
    });
  });

  it('When we delete a user it should go to first page', () => {
    expect(reducer(undefined, { type: 'DELETE_FRIEND' })).to.eql({
      currentPage: 1,
      pageItems: []
    });
  });

});
