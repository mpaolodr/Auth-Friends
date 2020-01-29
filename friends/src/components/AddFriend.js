import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class AddFriend extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        name: "",
        age: "",
        email: ""
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
      .post("/friends", this.state.user)

      .then(res => {
        this.props.history.push("/friendslist");
        this.setState({
          user: {
            name: "",
            age: "",
            email: ""
          }
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-form">
        <div className="ind-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.user.name}
            onChange={this.handleChange}
          />
        </div>

        <div className="ind-field">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={this.state.user.age}
            onChange={this.handleChange}
          />
        </div>

        <div className="ind-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddFriend;
