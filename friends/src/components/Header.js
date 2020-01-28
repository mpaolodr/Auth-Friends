import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to="/">Login</NavLink>

          {this.props.token ? (
            <>
              <NavLink to="/friendslist">Friends List</NavLink>
              <NavLink to="/addFriend">Add Friend</NavLink>
            </>
          ) : null}
        </nav>
      </header>
    );
  }
}

export default Header;
