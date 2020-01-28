import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// styles
import "./App.css";

// getToken function
import { getToken } from "./utils/axiosWithAuth";

// components
import Header from "./components/Header";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";

function App() {
  const token = getToken();

  return (
    <div className="App">
      <Header token={token} />

      <Switch>
        <PrivateRoute path="/friendslist" component={FriendsList} />
        <PrivateRoute path="/addfriend" component={AddFriend} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
