import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


class LogoutUser extends Component {

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
                            
                          >
                            Login
                          </Button>
                        </form>  
                  </div>  
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/" />
      </React.Fragment>
    );
  }
}

export default LogoutUser;
