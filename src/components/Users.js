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
        <Card>
          <Card.Content>
            User:<div className="header">{this.props.username}</div>
            Name:<div className="header">{this.props.displayName}</div>
            About:<div className="header">{this.props.about}</div>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  usersList: state.usersList
});

const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
