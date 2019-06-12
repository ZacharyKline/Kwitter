import React, { Component } from "react";
import { Icon, Feed } from "semantic-ui-react";
import moment from "moment"

export default class Message extends Component {
  render() {
    return (
      <Feed.Event>
        <Feed.Label>
          <img src="/images/avatar/small/elliot.jpg" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User>
            <Feed.Date>{moment(this.props.date).fromNow()}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            {this.props.text}
            <Feed.Like>
              <Icon name="like" />{this.props.likes} Likes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
}
