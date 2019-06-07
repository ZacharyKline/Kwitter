import React, { Component } from "react";
import Navbar from "./Navbar";
import {
  Card,
  Image,
  Grid,
  Segment,
  Message,
  Button,
  Icon
} from "semantic-ui-react";
import MessagePlatform from "./MessagePlatform";
//TODO: decide what will be displayed

class Livefeed extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Grid columns="equal">
          <Grid.Column>
            <Segment style={{ backgroundColor: "#5D9DE600" }}>
              <Card>
                <Image />
                <Card.Content>
                  <Card.Header>DISPLAYNAME HERE</Card.Header>
                  <Card.Description>Bio here?</Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment style={{ backgroundColor: "#405DBA" }}>
              <MessagePlatform />
              <br />
              <br />
              <div className="exampleMessageTemplate">
                <Message.Header>Username</Message.Header>
                <div>Date</div>
                <br />
                <div
                  className="messageText"
                  style={{ backgroundColor: "lightgrey" }}
                >
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
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </React.Fragment>
    );
  }
}

export default Livefeed;
