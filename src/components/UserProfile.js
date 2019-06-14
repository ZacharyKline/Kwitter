import React, { Component } from "react";
import {
  Card,
  Icon,
  Header,
  Placeholder,
  Segment,
  Button,
  Grid
} from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteUserThenGoToLoginPage as handleDeleteUser } from "../actions";
import { Link } from "react-router-dom";
import {setUserInfo, uploadPicture} from '../actions'
import {domain} from '../actions/constants'
import defaultPicture from '../img/avatar.jpeg'


//TODO: decide what will be displayed

// Tamekia - added something to start with to build the user profile page.
// So far the general idea is showing on screen just missing actual content
// to make it work... Some items require styling to make them line up the way
// we would like the page to look

class UserProfile extends Component {
  componentDidMount() {
    this.props.setUserInfo(this.props.id);
  }

  handleUploadPicture = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  }


  render() {
    const pictureSource = this.props.pictureLocation ? domain + this.props.pictureLocation : defaultPicture
    return (
      <React.Fragment>
        <Grid columns="equal">
          <Grid.Column>
            <Segment style={{ backgroundColor: "#5D9DE600" }}>
              <Card>
                {/* userInfo */}
                <Segment>
                  <img style={{ height: 150, width: 150 }} src={pictureSource} alt='Default user profile'>
                  </img>
                </Segment>
                <form onSubmit={this.handleUploadPicture}>
                  <input type="file" name="picture" />
                  <Button type='submit'>Upload a new picture</Button>
                </form>

                <Card.Content>
                  <Card.Header>Username: {}</Card.Header>
                  <Card.Meta>
                    <span className="userHandler"> {this.props.displayName}</span>
                    <br />
                    <br />
                  </Card.Meta>
                  <Card.Description>
                    {" "}
                    Bio: {this.props.about}
                  </Card.Description>
                </Card.Content>

                <Header as="h4">

                  <Link to="/editprofile">
                  <Button as="div" labelPosition="right">
                    <Button color="teal">
                      {" "}
                      <Icon name="edit" /> Edit Profile{" "}
                    </Button>
                  </Button>
                  </Link>
                </Header>
              </Card>


              <br />
              <br />

              <Button as="div" labelPosition="right">
                <Button onClick={this.props.handleDeleteUser} color="red">
                  {" "}
                  <Icon name="delete" /> Delete Profile{" "}
                </Button>
              </Button>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment style={{ backgroundColor: "#405DBA" }}>
              <Card.Description>
                {" "}
                Content: {} Some stuff about the stuff will go
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
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, editProfile }) {
  return {
    id: auth.login.id,
    displayName: editProfile.displayName,
    about: editProfile.about,
    lastUpdated: editProfile.lastUpdated,
    pictureLocation: editProfile.pictureLocation
  };
}
const mapDispatchToProps = {
  uploadPicture,
  handleDeleteUser, 
  setUserInfo
}
export default connect(
  mapStateToProps, mapDispatchToProps
)(UserProfile);
