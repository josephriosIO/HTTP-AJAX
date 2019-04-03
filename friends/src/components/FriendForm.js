import React, { Component } from "react";

class FriendForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friend: this.props.friend
    };
  }

  handleChanges = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
      }
    }));
  };

  addFriend = e => {
    e.preventDefault();

    if (this.props.activeFriend) {
      this.props.updateFriendForm(this.state.friend);
    } else {
      this.props.addFriend(this.state.friend);
    }
    this.setState({
      friend: {
        name: "",
        email: "",
        age: ""
      }
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.activeFriend ? "update friend" : "add new friend"}</h1>
        <form onSubmit={this.addFriend}>
          <input
            onChange={this.handleChanges}
            value={this.state.friend.name}
            name="name"
            placeholder="enter name..."
            type="text"
          />
          <input
            onChange={this.handleChanges}
            value={this.state.friend.age}
            name="age"
            placeholder="enter age..."
            type="number"
          />
          <input
            onChange={this.handleChanges}
            value={this.state.friend.email}
            name="email"
            placeholder="enter email..."
            type="email"
          />
          <button type="submit">
            {this.props.activeFriend ? "Update friend" : "add friend"}
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
