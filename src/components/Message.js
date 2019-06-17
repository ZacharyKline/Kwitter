import React, { Component } from "react";
import { Icon, Feed, Card } from "semantic-ui-react";
import moment from "moment";

class Message extends Component {
  // made changes to add user who has posted a message

  render() {
    return (
      <Feed.Event>
        <Card style={{ backgroundColor: "lightgrey", width: "100%" }}>
          <Card.Content>
            <Feed.Label>
              <img
                src="https://png.pngtree.com/svg/20161212/f93e57629c.svg"
                alt="alt text"
                style={{ height: 40, width: 40 }}
              />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User> {this.props.displayName}</Feed.User>
                <Feed.Date>{moment(this.props.date).fromNow()}</Feed.Date>
                <br />
              </Feed.Summary>
              <Feed.Meta style={{ backgroundColor: "white" }}>
                {this.props.text}
                <br />
                <br />
              </Feed.Meta>
              <br />
              <Feed.Like>
                <button>
                  <Icon name="like" />
                </button>
                {this.props.likes} Likes
                <br />
              </Feed.Like>
            </Feed.Content>
          </Card.Content>
        </Card>
        <br />
        <br />
      </Feed.Event>
    );
  }
}

export default Message;
