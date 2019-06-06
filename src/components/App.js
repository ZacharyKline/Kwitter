import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile } from ".";
import Livefeed from "./Livefeed";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/home" render={() => <Livefeed />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        {/* <Route exact path='/logout' render={() => <LogoutUser />} /> */}
      </Switch>
    );
  }
}

export default App;
