import React, { Component } from "react";

class FriendForm extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      age: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>enter new friend</h1>
        <form>
          <input
            onChange={this.handleChanges}
            value={this.state.name}
            name="name"
            placeholder="enter name..."
            type="text"
          />
          <input
            onChange={this.handleChanges}
            value={this.state.age}
            name="age"
            placeholder="enter age..."
            type="text"
          />
          <input
            onChange={this.handleChanges}
            value={this.state.email}
            name="email"
            placeholder="enter email..."
            type="email"
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
