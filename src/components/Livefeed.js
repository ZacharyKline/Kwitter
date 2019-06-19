import React, { Component } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../actions";
import HomeFeed from "./Feed";
import { Card, Image, Grid, Segment } from "semantic-ui-react";
import MessagePlatform from "./MessagePlatform";
import UsersList from "./Users";
import {domain} from '../actions/constants'

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
            <Segment style={{ backgroundColor: "#5D9DE600" }} >
              <Card >
                <Card.Content>
                  <Image style={{width: '100%', height: '100%'}} src={this.props.pictureLocation}/>
                  <br/>
                  <br/>
                  <Card.Header>
                    Display Name: {this.props.displayName}
                  </Card.Header>
                  <Card.Description>
                    About Me: {this.props.about}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Segment>
          </Grid.Column>
          <Grid.Column width={7}>
            <Segment style={{ backgroundColor: "#405DBA" }}>
              <MessagePlatform />
              <br />
              <br />
            </Segment>
            <Segment style={{ backgroundColor: "#5D9DE600" }}>
              <HomeFeed />
              <br />
              <br />
            </Segment>
          </Grid.Column>
          <Grid.Column />
          <Grid.Column style={{border: 'none'}}>
            <Segment style={{backgroundColor:'#405DBA', border: 'none'}}>
              <h1>Users you may know!</h1>
              <UsersList />
            </Segment>
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth, editProfile, messages }) {
  return {
    id: auth.login.id,
    displayName: editProfile.displayName,
    about: editProfile.about,
    pictureLocation: domain + editProfile.pictureLocation,
    // password: editProfile.password,
    lastUpdated: editProfile.lastUpdated
  };
}

const mapDispatchToProps = {
  setUserInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Livefeed);
