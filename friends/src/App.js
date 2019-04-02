import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

//components
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="nav-links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/form">Form</NavLink>
        </div>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/form"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
      </div>
    );
  }
}

export default App;
