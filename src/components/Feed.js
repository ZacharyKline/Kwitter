import React, { Component } from "react";
import { Icon, Message, Button } from "semantic-ui-react";

export default class Feed extends Component {
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
          {/* add feed semantic */}
          <div className = "feed">
          <Feed size='large'>
          <Feed.Event>
      <Feed.Label icon='pencil' />
      <Feed.Content>
        <Feed.Summary>
          New post to page
          <Feed.Date>13 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>{this.state.messages}</Feed.Extra>
        <Feed.Meta>
          <Feed.Like>11 Likes</Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    </Feed>
          </div>
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}
