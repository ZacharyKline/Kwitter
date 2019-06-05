import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Spinner from "react-spinkit";
import "../index.css";

//TODO: bug fix, (Unexpected token < in JSON at position 0)

class LoginForm extends Component {
  state = { username: "", password: "", active: false };

  handleToggle = event => {
    event.preventDefault();
    this.setState({
      active: !this.state.active
    });
  };

  handleRegister = event => {};

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { isLoading, err } = this.props;
    if (this.state.active) {
      return (
        <React.Fragment>
          <div style={{ backgroundColor: "#405DBA" }}>
            <div className="login__Box">
              <div
                class="ui placeholder segment"
                style={{ backgroundColor: "#5D9DE6" }}
              >
                <div class="ui two column very relaxed stackable grid">
                  <div class="column">
                    <div class="ui form">
                      <div class="field">
                        <h1 className="login__Text">Login</h1>
                        <form onSubmit={this.handleLogin}>
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
                          <Button class="" type="submit" disabled={isLoading}>
                            Login
                          </Button>
                        </form>
                        {isLoading && <Spinner name="circle" color="blue" />}
                        {err && <p style={{ color: "red" }}>{err}</p>}
                      </div>
                    </div>
                  </div>
                  <div class="middle aligned column">
                    <div class="ui form">
                      <div class="field">
                        <Button
                          className="registerButton"
                          onClick={this.handleToggle}
                        >
                          Register?
                        </Button>
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

                          <Button class="ui big button">
                            <i class="signup icon" />
                            Submit
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ui vertical divider" />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div style={{ backgroundColor: "#405DBA" }}>
            <div className="login__Box">
              <div
                class="ui placeholder segment"
                style={{ backgroundColor: "#5D9DE6" }}
              >
                <div class="ui two column very relaxed stackable grid">
                  <div class="column">
                    <div class="ui form">
                      <div class="field">
                        <h1 className="login__Text">Login</h1>
                        <form onSubmit={this.handleLogin}>
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
                          <Button class="" type="submit" disabled={isLoading}>
                            Login
                          </Button>
                        </form>
                        {isLoading && <Spinner name="circle" color="blue" />}
                        {err && <p style={{ color: "red" }}>{err}</p>}
                      </div>
                    </div>
                  </div>
                  <div class="middle aligned column">
                    <Button
                      className="registerButton"
                      onClick={this.handleToggle}
                    >
                      Register Here
                    </Button>
                  </div>
                </div>
                <div class="ui vertical divider" />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
