import React, { Component } from "react";
import Message from "./Message";
import { Feed } from "semantic-ui-react";
import { getMessages } from "../actions";
import { connect } from "react-redux";

class HomeFeed extends Component {
  componentDidMount() {
    this.props.getMessages();
    this.messagePollingID = setInterval(this.props.getMessages, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.messagePollingID);
  }
  render() {
    console.log(this.props.messages);
    const messages = this.props.messages.map(message => (
      <Message
        key={message.id}
        date={message.createdAt}
        text={message.text}
        likes={message.likes.length}
      />
    ));
    return (
      <React.Fragment>
        <Feed>
          {messages}
          {/* <Feed.Event>
            <Feed.Label>
              <img src="/images/avatar/small/elliot.jpg" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>Elliot Fu</Feed.User> added you as a friend
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />4 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event> */}
        </Feed>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default connect(
  ({ messages }) => ({
    messages: messages.messages
  }),
  { getMessages }
)(HomeFeed);
