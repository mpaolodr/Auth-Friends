import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
