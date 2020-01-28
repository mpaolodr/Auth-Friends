import React from "react";
import { withRouter } from "react-router-dom";

import Friend from "./Friend";
import EditFriend from "./EditFriend";

import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      currentUser: "",
      editing: false
    };
  }

  componentDidMount() {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        this.setState({
          ...this.state,
          data: res.data
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      axiosWithAuth()
        .get("/friends")
        .then(res => {
          this.setState({
            ...this.state,
            data: res.data
          });
        });
    }
  }

  // set editing to true
  userToEdit = user => {
    this.setState({
      ...this.state,
      currentUser: user,
      editing: true
    });
  };

  setEditing = () => {
    this.setState({
      ...this.state,
      currentUser: "",
      editing: false
    });
  };

  deleteFriend = id => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => this.setState({ ...this.state, data: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.editing ? (
          <EditFriend
            currentUser={this.state.currentUser}
            setEditing={this.setEditing}
          />
        ) : (
          <div className="friends-container">
            {this.state.data.map(friend => {
              return (
                <div className="card" key={friend.id}>
                  <Friend
                    key={friend.id}
                    friend={friend}
                    editing={this.state.editing}
                    userToEdit={this.userToEdit}
                    deleteFriend={this.deleteFriend}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default FriendsList;
