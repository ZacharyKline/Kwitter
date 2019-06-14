import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import getUsers from "../actions/getUsers";
import { connect } from "react-redux";

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.usersList.map(usersList => {
          return (
            <Card key={usersList.id}>
              <h3>{usersList.displayName}</h3>
              <p>{usersList.username}</p>
            </Card>
          );
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
