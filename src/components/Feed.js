import React, { Component } from "react";
import Message from './Message'
import { Feed } from "semantic-ui-react";
import { getMessages } from "../actions";
import { connect } from "react-redux";

class HomeFeed extends Component {
  componentDidMount() {
    
    this.props.getMessages()
  }

  render() {
    console.log(this.props.messages)
    const messages = this.props.messages.map((message, index) => (
      <Message 
        key={index}
        date={message.createdAt}
        text={message.text}
        likes={message.likes.length}
        userName={message.username}
        displayName={message.displayName}
      />
    ))
    return (
      <React.Fragment>
        <Feed>
          {messages}
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
