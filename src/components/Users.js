import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import getUsers from "../actions/getUsers";
import { connect } from "react-redux";
import defaultPicture from "../img/avatar.jpeg";
import { domain } from "../actions/constants";

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const pictureSource = this.props.pictureLocation
      ? domain + this.props.pictureLocation
      : defaultPicture;
    return (
      <React.Fragment>
        {this.props.usersList.map(user => {
          if (user.id % 30 === 0) {
            return (
              <Card key={user.id}>
                <img
                  style={{
                    height: 75,
                    width: 75,
                    margin: "auto"
                  }}
                  src={pictureSource}
                  alt="Default user profile"
                />
                <h3>Display Name: {user.displayName}</h3>
                <p>Username: {user.username}</p>
              </Card>
            );
          } else {
            return null;
          }
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.users.usersList
});

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
