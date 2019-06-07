import React, { Component } from "react";
import {
  Card,
  Icon,
  Header,
  Placeholder,
  Segment,
  Label,
  Button
} from "semantic-ui-react";

//TODO: decide what will be displayed

// Tamekia - added something to start with to build the user profile page.
// So far the general idea is showing on screen just missing actual content
// to make it work... Some items require styling to make them line up the way
// we would like the page to look

class UserProfile extends Component {
  state = {
    // userInfo
    username: " ",
    img: " ",
    bio: " ",
    birthdate: " ",
    // userBar
    kwits: " ",
    following: " ",
    followers: " ",
    logout: " ",
    // userContent
    content: " ",
    likes: " ",
    comments: " ",
    rekwit: " ",
    // logo
    kwitterLogo: " "
  };

  render() {
    return (
      <React.Fragment>
        <Card>
          {/* userInfo */}
          <Segment>
            <Placeholder style={{ height: 150, width: 150 }}>
              {" "}
              {this.state.img} image goes here <Placeholder.Image />{" "}
            </Placeholder>
          </Segment>

          <Card.Content>
            <Card.Header>Username: {this.state.username}</Card.Header>
            <Card.Meta>
              <span className="userHandler">@ {this.state.username}</span>
              <br />
              <br />
            </Card.Meta>
            <Card.Description>
              {" "}
              Bio: {this.state.bio} Some stuff about the stuff will go here.{" "}
            </Card.Description>
            <Card.Meta>
              <br />

              <span className="bday"> Birthday: {this.state.birthdate} </span>
              <br />
              <span className="date">Joined in 2019</span>
            </Card.Meta>
          </Card.Content>

          <Header as="h4">
            <Icon.Group size="large">
              <Icon name="twitter" />
              <Icon corner name="add" />
            </Icon.Group>
            Add on Kwitter
          </Header>
        </Card>

        <Card.Description>
          {" "}
          Content: {this.state.content} Some stuff about the stuff will go
          below.{" "}
        </Card.Description>

        <Placeholder fluid>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>

        <br />

        <Button as="div" labelPosition="right">
          <Button color="teal">
            {" "}
            <Icon name="heart" /> Likes{" "}
          </Button>
          <Label as="a" basic color="red" pointing="left">
            {" "}
            2,048{" "}
          </Label>
        </Button>

        <Button as="div" labelPosition="right">
          <Button color="teal">
            {" "}
            <Icon name="edit" /> Comments{" "}
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            {" "}
            2,048{" "}
          </Label>
        </Button>

        <Button as="div" labelPosition="right">
          <Button color="teal">
            {" "}
            <Icon name="retweet" /> Rekwits{" "}
          </Button>
          <Label as="a" basic color="green" pointing="left">
            {" "}
            2,048{" "}
          </Label>
        </Button>
        <br />
        <br />

        <Button as="div" labelPosition="right">
          <Button color="teal">
            {" "}
            <Icon name="delete" /> Delete Profile{" "}
          </Button>
        </Button>
      </React.Fragment>
    );
  }
}

export default UserProfile;
