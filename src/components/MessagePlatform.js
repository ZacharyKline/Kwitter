import React, { Component } from "react";
import { Comment, Form } from "semantic-ui-react";
import { postMessage } from "../actions";
import { connect } from "react-redux";

class MessagePlatform extends Component {
  state = { text: "" };
  messageLength = false;

  handleSubmit = event => {
    const userText = this.state;
    console.log(this.props);
    event.preventDefault();
    this.props.postMessage(this.state);
    console.log(event.target.value);
    event.target.value = "";
    this.setState({ text: "" });
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
    console.log(this.state);
  };

  render() {
    const text = this.state;
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#5D9DE6" }}>
          <Comment.Group>
            <Comment>
              <Comment.Content>
                <Comment.Author as="a">User</Comment.Author>
                <Comment.Metadata>
                  <div>2 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Status:</Comment.Text>
                <Form>
                  <Form.Group>
                    <Form.Input
                      placeholder="What's on your mind?"
                      onChange={this.handleChange}
                    />
                    <Form.Button
                      content="Submit"
                      labelPosition="left"
                      icon="edit"
                      value={text}
                      onClick={this.handleSubmit}
                    />
                  </Form.Group>
                </Form>
              </Comment.Content>
            </Comment>
          </Comment.Group>
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
