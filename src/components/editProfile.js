import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export class EditProfile extends Component {

    handleEditProfile = event => {

    }
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="login__Box">
            <div
              className="ui placeholder segment"
              style={{ backgroundColor: "#5D9DE6" }}
            >
              <div>
                <div className="column">
                  <div className="ui form">
                    <div className="field">
                      <h1 className="login__Text">Edit Profile</h1>
                      <form onSubmit={this.handleEditProfile}>
                        <label htmlFor="displayname">Edit Display Name:</label>
                        <input
                          type="text"
                          name="username"
                          autoFocus
                          required
                          onChange={this.handleChange}
                        />
                        <br/>
                        <br/>
                        <label htmlFor="password">Edit Password:</label>
                        <input
                          type="password"
                          name="password"
                          required
                          onChange={this.handleChange}
                        />
                        <br/>
                        <br/>
                        <label htmlFor="about">Edit Bio</label>
                                                <input
                          type="text"
                          name="about"
                          required
                          onChange={this.handleChange}
                        />
                        <br/>
                        <br/>
                        <Button type="submit">
                        Save Edits
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditProfile;
