import React from "react";
import { Component } from "react";
import { Button } from "semantic-ui-react";

export default class Registration extends Component {
  state = { display: "", username: "", password: "" };
  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleRegister}>
          <label htmlFor="name">Display Name:</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />

          <Button className="ui big button">
            <i className="signup icon" />
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}
