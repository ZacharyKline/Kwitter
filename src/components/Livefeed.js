import React, { Component } from "react";
import Navbar from "./Navbar";

//TODO: decide what will be displayed

class Livefeed extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <p>This is the user's livefeed when logged in</p>
      </React.Fragment>
    );
  }
}

export default Livefeed;
