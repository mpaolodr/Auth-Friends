import React from "react";

// axios with auth
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: ""
      },
      isLoading: false
    };
  }

  // handle input changes
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  // handle submit
  handleSubmit = e => {
    e.preventDefault();
    // axiosWithAuth here
    this.setState({
      ...this.state,
      isLoading: true
    });
    axiosWithAuth()
      .post("/login", this.state.user)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendslist");
        this.setState({
          user: {
            username: "",
            password: ""
          },
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({
          ...this.state,
          isLoading: false
        });
      });
  };

  render() {
    {
      return this.state.isLoading ? (
        <h2>Loading</h2>
      ) : (
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="ind-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>

          <div className="ind-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Log In</button>
        </form>
      );
    }
  }
}

export default Login;
