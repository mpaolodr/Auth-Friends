import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          {this.props.token ? (
            <>
              <NavLink to="/friendslist">Friends List</NavLink>
              <NavLink to="/addFriend">Add Friend</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </>
          ) : (
            <NavLink to="/" className="login-link">
              Login
            </NavLink>
          )}
        </nav>
      </header>
    );
  }
}

export default Header;
