import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomeContainer from './home/HomeContainer';
import LoginContainer from './login/LoginContainer';

class AnonUser extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ HomeContainer } />
          <Route exact path="/login" component={ LoginContainer } />

          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default AnonUser;