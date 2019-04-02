import React, { Component } from "react";

class UpdateFriendForm extends Component {
  constructor() {
    super();

    this.state = {
      friend: {
        name: "",
        email: "",
        age: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  changeFriend = e => {
    e.preventDefault();

    this.props.putFriend("5", this.state.friend);
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
        <h1>Update friend</h1>
        <form onSubmit={this.changeFriend}>
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
            type="text"
          />
          <input
            onChange={this.handleChanges}
            value={this.state.friend.email}
            name="email"
            placeholder="enter email..."
            type="email"
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default UpdateFriendForm;
