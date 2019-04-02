import React from "react";

const FriendsList = props => {
  if (props.friends.length === 0) {
    return <h3>Waiting on friends to come...</h3>;
  }
  return (
    <div>
      {props.friends.map(friend => (
        <div key={friend.id}>
          <h1>{friend.name}</h1>
          <h2>{friend.age}</h2>
          <h2>{friend.email}</h2>

          <button onClick={e => props.deleteFriend(e, friend.id)}>
            delete friend
          </button>
          <button onClick={e => props.putFriend(friend.id, friend)}>
            update friend
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;
