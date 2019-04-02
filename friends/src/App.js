import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

//components
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import UpdateFriendForm from "./components/UpdateFriendForm";

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
    this.props.history.push("/");
  };

  putFriend = (id, friend) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="nav-links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/form">Form</NavLink>
          <NavLink to="/form/update">Update Friend</NavLink>
        </div>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          exact
          path="/form"
          render={props => <FriendForm {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/form/update"
          render={props => (
            <UpdateFriendForm {...props} putFriend={this.putFriend} />
          )}
        />
      </div>
    );
  }
}

export default App;
