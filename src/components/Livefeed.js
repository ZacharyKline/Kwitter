import React, { Component } from "react";
import Navbar from "./Navbar";
import { Button, Card, Image } from "semantic-ui-react";

//TODO: decide what will be displayed

class Livefeed extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="bodyContent">
        <div class="ui vertically divided grid">
          <div class="three column row">
            <div class="column">
              <Card>
                <Image/>
                <Card.Content>
                <Card.Header>DISPLAYNAME HERE</Card.Header>
                <Card.Description>Bio here?</Card.Description>

                </Card.Content>
              </Card>
            </div>
            <div class="column">
            <div className="feedTest">
            <h1>FEED GOES HERE</h1>
            </div>
            </div>
            <div class="column">
            <div className="buttonTesting">
              <Button>Logout Button</Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Livefeed;
