import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

class FriendList extends Component {

  renderFriendsList() {
    return (
      this.props.friends.map((friend, index) => {
        return (
          <FriendListItem
            key={index}
            id={index}
            name={friend.name}
            starred={friend.starred}
            {...this.props.actions} />
        );
      })
    );
  }

  render () {
    return (
      <ul className={styles.friendList}>
        { this.renderFriendsList() }
      </ul>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
