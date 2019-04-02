import React, { Component } from "react";

class FriendForm extends Component {
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

    this.props.addFriend(this.state.friend);
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
        <h1>enter new friend</h1>
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
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
