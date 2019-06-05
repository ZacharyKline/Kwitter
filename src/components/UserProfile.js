import React, { Component } from "react";
import Navbar from "./Navbar";

//TODO: decide what will be displayed

class UserProfile extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <p>This is the user profile</p>
      </React.Fragment>
    );
  }
}

export default UserProfile;
