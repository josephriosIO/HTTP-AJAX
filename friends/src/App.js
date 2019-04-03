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
      error: "",
      activeFriend: false,
      friend: {
        name: "",
        email: "",
        age: ""
      }
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

  updateFriendForm = friend => {
    axios
      .put(`http://localhost:5000/friends/${this.state.friend.id}`, friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/");
  };

  updateFriend = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      activeFriend: true
    });
    this.props.history.push("/form");
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
    this.props.history.push("/");
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
            <FriendsList
              {...props}
              updateFriend={this.updateFriend}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          exact
          path="/form"
          render={props => (
            <FriendForm
              {...props}
              updateFriendForm={this.updateFriendForm}
              activeFriend={this.state.activeFriend}
              friend={this.state.friend}
              addFriend={this.addFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
