import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile } from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/home" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
      </Switch>
    );
  }
}

export default App;
