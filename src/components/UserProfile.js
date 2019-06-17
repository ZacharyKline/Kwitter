import React, { Component } from "react";
import {
  Card,
  Icon,
  Header,
  Segment,
  Button,
  Grid,
  Feed
} from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteUserThenGoToLoginPage as handleDeleteUser } from "../actions";
import { Link } from "react-router-dom";
import {
  setUserInfo,
  uploadPicture,
  getLoggedInUserMessages
} from "../actions";
import { domain } from "../actions/constants";
import defaultPicture from "../img/avatar.jpeg";
import moment from "moment";
import { toggleLike } from "../actions/";

//TODO: decide what will be displayed

// Tamekia - added something to start with to build the user profile page.
// So far the general idea is showing on screen just missing actual content
// to make it work... Some items require styling to make them line up the way
// we would like the page to look

class UserProfile extends Component {
  componentDidMount() {
    this.props.setUserInfo(this.props.id);
    this.props.getLoggedInUserMessages();
  }

  handleUploadPicture = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  };

  render() {
    const pictureSource = this.props.pictureLocation
      ? domain + this.props.pictureLocation
      : defaultPicture;
    return (
      <React.Fragment>
        <Grid columns="equal">
          <Grid.Column>
            <Segment style={{ backgroundColor: "#5D9DE600" }}>
              <Card style={{ backgroundColor: "#5D9DE6" }}>
                {/* userInfo */}
                <Segment>
                  <img
                    style={{ height: 150, width: 150 }}
                    src={pictureSource}
                    alt="Default user profile"
                  />
                </Segment>
                <div>Change your picture:</div>
                <form onSubmit={this.handleUploadPicture}>
                  <input type="file" name="picture" />
                  <br />
                  <br />
                  <Button type="submit" color="teal">
                    Upload a new picture
                  </Button>
                </form>

                <Card.Content>
                  <Card.Header>Username:</Card.Header>
                  <Card.Meta>{this.props.username}</Card.Meta>
                  <br />
                  <Card.Header>Display Name:</Card.Header>
                  <Card.Meta>
                    <span className="userHandler">
                      {this.props.displayName}
                    </span>
                    <br />
                    <br />
                  </Card.Meta>
                  <Card.Header>
                    About:
                    <Card.Meta>{this.props.about}</Card.Meta>
                  </Card.Header>
                </Card.Content>

                <Header as="h4">
                  <Link to="/editprofile">
                    <Button color="teal">
                      <Icon name="edit" /> Edit Profile{" "}
                    </Button>
                  </Link>

                  <br />
                  <br />

                  <Button onClick={this.props.handleDeleteUser} color="red">
                    <Icon name="delete" /> Delete Profile{" "}
                  </Button>
                </Header>
              </Card>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment style={{ backgroundColor: "#405DBA" }}>
              <Card.Description>
                <h1>Your Message History</h1>
              </Card.Description>

              {this.props.messages.map(message => {
                return (
                  <React.Fragment>
                    <Card style={{ backgroundColor: "lightgrey" }}>
                      <Card.Content>
                        <Feed.Content>
                          <Feed.Summary>
                            <Feed.User>{this.props.displayName}</Feed.User>
                            <br />
                            <Feed.Date>
                              {moment(message.createdAt).fromNow()}
                            </Feed.Date>
                          </Feed.Summary>
                          <Feed.Meta style={{ backgroundColor: "white" }}>
                            {message.text}
                            <br />
                            <br />
                          </Feed.Meta>
                          <br />
                          <Feed.Like>
                            <button
                              onClick={event => {
                                event.preventDefault();
                                this.props.toggleLike(message.id, true);
                              }}
                              href="#"
                            >
                              <Icon name="like" />
                            </button>
                            {message.likes.length} Likes
                            <br />
                          </Feed.Like>
                        </Feed.Content>
                      </Card.Content>
                    </Card>
                  </React.Fragment>
                );
              })}
              <br />
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, editProfile, getMessages }) {
  return {
    id: auth.login.id,
    username: editProfile.username,
    displayName: editProfile.displayName,
    about: editProfile.about,
    lastUpdated: editProfile.lastUpdated,
    pictureLocation: editProfile.pictureLocation,
    messages: getMessages.userMessages || []
  };
}
const mapDispatchToProps = {
  uploadPicture,
  handleDeleteUser,
  setUserInfo,
  getLoggedInUserMessages,
  toggleLike
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
