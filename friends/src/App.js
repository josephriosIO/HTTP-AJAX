import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

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
  render() {
    return (
      <div>
        <Route exact path="/" component={FriendsList} />
        <Route path="/form" component={FriendForm} />
      </div>
    );
  }
}

export default App;
