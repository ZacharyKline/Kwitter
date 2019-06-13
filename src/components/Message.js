import React, { Component } from "react";
import { Icon, Feed, Card } from "semantic-ui-react";
import moment from "moment";

export default class Message extends Component {
  render() {
    return (
      <Feed.Event>
        <Card style={{ backgroundColor: "lightgrey" }}>
          <Card.Content>
            <Feed.Label>
              <img src="https://png.pngtree.com/svg/20161212/f93e57629c.svg" style={{height: 40, width: 40}}/>
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Default DisplayName</Feed.User>
                <Feed.Date>{moment(this.props.date).fromNow()}</Feed.Date>
                <br />
              </Feed.Summary>
              <Feed.Meta style={{ backgroundColor: "white"}}>
                {this.props.text}
              <br />
              <br />
              </Feed.Meta>
              <br />
              <Feed.Like>
                <Icon name="like" />
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
