import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/">Login</NavLink>
          <NavLink to="/friendslist">Friends List</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
