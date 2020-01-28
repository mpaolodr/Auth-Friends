import React from "react";

import Friend from "./Friend";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="friends-container">
        {this.state.data.map(friend => {
          return (
            <div className="card" key={friend.id}>
              <Friend key={friend.id} friend={friend} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
