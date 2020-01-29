import React from "react";

class Friend extends React.Component {
  render() {
    return (
      <>
        <h2 className={this.props.editing.toString()}>
          {this.props.friend.name}
        </h2>
        <h2>{this.props.friend.age}</h2>
        <h2>{this.props.friend.email}</h2>

        <div className="btn-container">
          <button onClick={() => this.props.userToEdit(this.props.friend)}>
            Edit
          </button>
          <button onClick={() => this.props.deleteFriend(this.props.friend.id)}>
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default Friend;
