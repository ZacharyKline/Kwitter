import React, { Component } from "react";
import { Button } from 'semantic-ui-react'


class MessagePlatform extends Component {
    state = {
      
      messageSubmit: " ", 
    }
  
    render() {
      return (
  <React.Fragment>
   
  <div>
  <Comment.Group>
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>User</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Status:</Comment.Text>
        <Form reply>
          <Form.TextArea />
          <Button content='Post' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>
  </div>
)
        </React.Fragment>
      )
    }
  }
  
  export default MessagePlatform;