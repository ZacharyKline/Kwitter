import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Spinner from "react-spinkit";
import Navbar from "./Navbar";
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

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    if (this.state.active) {
      return (
        <React.Fragment>
          <Navbar />
          <div style={{}}>
            <div className="login__Box">
              <div
                id="test"
                className="ui placeholder segment"
                style={{ backgroundColor: "#5D9DE6" }}
              >
                <div className="ui two column very relaxed stackable grid">
                  <div className="column">
                    <div className="ui form">
                      <div className="field">
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
                          <Button
                            className=""
                            type="submit"
                            disabled={isLoading}
                          >
                            Login
                          </Button>
                        </form>
                        {isLoading && <Spinner name="circle" color="blue" />}
                        {err && <p style={{ color: "red" }}>{err}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="middle aligned column">
                    <div className="ui form">
                      <div className="field">
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

                          <Button className="ui big button">
                            <i className="signup icon" />
                            Submit
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui vertical divider" />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Navbar />
          <div>
            <div className="login__Box">
              <div className="ui placeholder segment"
              style={{ backgroundColor: "#5D9DE6" }}>
                <div className="ui two column very relaxed stackable grid">
                  <div className="column">
                    <div className="ui form">
                      <div className="field">
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
                          <Button
                            className=""
                            type="submit"
                            disabled={isLoading}
                          >
                            Login
                          </Button>
                        </form>
                        {isLoading && <Spinner name="circle" color="blue" />}
                        {err && <p style={{ color: "red" }}>{err}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="middle aligned column">
                    <Button
                      className="registerButton"
                      onClick={this.handleToggle}
                    >
                      Register Here
                    </Button>
                  </div>
                </div>
                <div className="ui vertical divider" />
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
