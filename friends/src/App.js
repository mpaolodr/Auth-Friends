import React from "react";
import { Switch, Route } from "react-router-dom";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
