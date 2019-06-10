import React, { Component } from "react";
import {
  Feed,
  Card,
  Icon,
  Container,
  Message,
  Button
} from "semantic-ui-react";

class Feed extends Component {
  state = {
    messages: []
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <div className="exampleMessageTemplate">
          <Message.Header />
          <div />
          <br />
          <div className="messageText" style={{ backgroundColor: "lightgrey" }}>
            This is the example message to show how it looks
          </div>
          <br />
          <div className="buttonsInputsEtc">
            <Button color="teal">
              {" "}
              <Icon name="heart" /> Like{" "}
            </Button>
          </div>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}
