import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import axios from "axios";

//components
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friends: res.data }))
      .catch(err => {});
  }
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route path="/form" component={FriendForm} />
      </div>
    );
  }
}

export default App;
