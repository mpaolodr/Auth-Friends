import React from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/friendslist" component={FriendsList} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
