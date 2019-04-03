import React, { Component } from "react";

class FriendsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.friends.length === 0) {
      return <h3>Waiting on friends to come...</h3>;
    }
    return (
      <div>
        {this.props.friends.map(friend => (
          <div key={friend.id}>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>

            <button onClick={e => this.props.deleteFriend(e, friend.id)}>
              delete friend
            </button>
            <button onClick={e => this.props.updateFriend(e, friend.id)}>
              update friend
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
