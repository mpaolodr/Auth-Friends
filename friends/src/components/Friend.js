import React from "react";

class Friend extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.friend.name}</h2>
        <h2>{this.props.friend.age}</h2>
        <h2>{this.props.friend.email}</h2>
      </>
    );
  }
}

export default Friend;
