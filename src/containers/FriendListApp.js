import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import changePagination from '../actions/PaginationActions';
import { FriendList, AddFriendInput, Pagination } from '../components';

class FriendListApp extends Component {

  render () {
    const { friendlist: { friendsById }, pagination } = this.props;

    const actions = {
      addFriend: this.props.addFriend,
      deleteFriend: this.props.deleteFriend,
      starFriend: this.props.starFriend,
      changePagination: this.props.changePagination
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={this.props.pagination.pageItems} currentPage={this.props.pagination.currentPage} actions={actions} />
        <Pagination friends={friendsById} {...pagination} changePagination={actions.changePagination} currentPage={this.props.pagination.currentPage}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  addFriend,
  deleteFriend,
  starFriend,
  changePagination
})(FriendListApp)
