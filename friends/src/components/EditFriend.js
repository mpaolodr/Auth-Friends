import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class EditFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: this.props.currentUser.id,
        name: this.props.currentUser.name,
        age: this.props.currentUser.age,
        email: this.props.currentUser.email
      }
    };
  }

  // handle input changes
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  // handle submit
  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/friends/${this.state.user.id}`, this.state.user)
      .then(res => this.props.setEditing())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.user.name}
          onChange={this.handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={this.state.user.age}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={this.state.user.email}
          onChange={this.handleChange}
        />
        <button type="submit">Update</button>
      </form>
    );
  }
}

export default EditFriend;
