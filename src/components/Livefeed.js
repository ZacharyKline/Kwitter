import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserInfo ,getMessages} from "../actions";
import HomeFeed from './Feed'
import {
  Card,
  Image,
  Grid,
  Segment,
  Message,
  Button,
  Icon
} from "semantic-ui-react";
import MessagePlatform from "./MessagePlatform";
import { statement } from "@babel/template";

//TODO: decide what will be displayed

class Livefeed extends Component {
  componentDidMount() {
    this.props.setUserInfo(this.props.id);
    
    
  }

  render() {
    return (
      <React.Fragment>
        <Grid columns="equal" padded>
          <Grid.Column>
            <Segment style={{ backgroundColor: "#5D9DE600" }}>
              <Card>
                <Image />
                <Card.Content>
                  <Card.Header>Display Name: {this.props.displayName}</Card.Header>
                  <Card.Description>About Me: {this.props.about}</Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment style={{ backgroundColor: "#405DBA" }}>
              <MessagePlatform />
              <br />
              <br />
              <HomeFeed />
              <br />
              <br />
            </Segment>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, editProfile ,messages}) {
  return {
    id: auth.login.id,
    displayName: editProfile.displayName,
    about: editProfile.about,
    // password: editProfile.password,
    lastUpdated: editProfile.lastUpdated,
    
  };
}

const mapDispatchToProps = {
  setUserInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Livefeed);
