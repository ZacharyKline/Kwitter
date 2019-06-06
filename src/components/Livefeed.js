import React, { Component } from "react";
import Navbar from "./Navbar";

//TODO: decide what will be displayed

class Livefeed extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="feedArea" />
      </React.Fragment>
    );
  }
}

export default Livefeed;
