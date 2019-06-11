import React, { Component } from "react";
import { Comment, Form } from "semantic-ui-react";
import { postMessage } from "../actions";
import { connect } from "react-redux";

class MessagePlatform extends Component {
  state = { text: "" };
  messageLength = false;

  handleSubmit = event => {
    // let postMessage = this.props;
    const userText = this.state;
    console.log("click");

    event.preventDefault();

    if (userText.length >= 1 && userText.length <= 100) {
      postMessage(this.state);
      event.target.text.value = "";
      this.setState({ text: "" });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const message = this.state.text;
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#5D9DE6" }}>
          {/* <Comment.Group>
            <Comment>
              <Comment.Content>
                <Comment.Author as="a">User</Comment.Author>
                <Comment.Metadata>
                  <div>2 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Status:</Comment.Text> */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="What's on your mind?"
                name={message}
                onChange={this.handleChange}
              />
              <Form.Button
                content="Submit"
                labelPosition="left"
                icon="edit"
                onClick={this.handleSubmit}
              />
            </Form.Group>
          </Form>
          {/* </Comment.Content>
            </Comment>
          </Comment.Group> */}
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  postMessage
};

function mapStateToProps({ messages }) {
  return {
    messages_failed: messages.messages_failed
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagePlatform);
