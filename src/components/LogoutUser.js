import React, { Component } from "react";
import "../App.css";
import { Container, Button, Image } from "semantic-ui-react";

class LogoutUser extends Component {
  state = {
    user: {},
    active: false
  };
}
class LogoutUser extends Component {
  render() {
    return (
      <React.Fragment>
        <Button type="submit" color="blue">Logout</Button>
      </React.Fragment>
    );
  }
}

export default LogoutUser;
