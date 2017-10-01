import React, { Component } from 'react';
import _ from 'lodash';
import './Pagination.css';

const defaultProps = {
  initialPage: 1,
  pageSize: 2
};

class Pagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pager: {}
    };
  }

  componentWillMount() {
    if (this.props.friends && this.props.friends.length) {
      this.setPage(this.props.currentPage || 1);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.friends !== prevProps.friends) {
      this.setPage(this.props.currentPage || 1);
    }
  }

  setPage(page) {
    const { friends } = this.props;
    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(friends.length, page);

    const pageItems = friends.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({ pager: pager });

    this.props.changePagination(pageItems, pager.currentPage);
  }

  getPager(totalFriends, currentPage = 1) {
    const pageSize = this.props.pageSize || 2;
    const totalPages = Math.ceil(totalFriends / pageSize);
    const startPage = 1, endPage = totalPages;

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalFriends - 1);

    // create an array of pages to iterate in the pager control
    const pages = _.range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalFriends: totalFriends,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    const pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage - 1)}>Prev</a>
        </li>
        {pager.pages.map((page, index) =>
          <li key={index} className={pager.currentPage === page ? 'active' : ''}>
            <a onClick={() => this.setPage(page)}>{page}</a>
          </li>
        )}
        <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
          <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
        </li>
      </ul>
    );

  }
}

Pagination.defaultProps = defaultProps;

export default Pagination;
