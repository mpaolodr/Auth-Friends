import React from "react";

// axios with auth
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  // handle input changes
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  // handle submit
  handleSubmit = e => {
    e.preventDefault();
    // axiosWithAuth here
    axiosWithAuth()
      .post("/login", this.state)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendslist");
        this.setState({
          username: "",
          password: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type="submit">Log In</button>
      </form>
    );
  }
}

export default Login;
