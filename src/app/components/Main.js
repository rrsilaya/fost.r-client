import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Adopt from '../pages/Adopt';
import Dates from '../pages/Dates';
import Rescue from '../pages/Rescue';
import Community from '../pages/Community';
import NoPage from '../pages/NoPage';

class Main extends Component {
  render() {
    return (
      <div className="uk-margin-small-top">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/adopt" component={ Adopt } />
          <Route exact path="/dates" component={ Dates } />
          <Route exact path="/rescue" component={ Rescue } />
          <Route exact path="/community" component={ Community } />

          <Route component={ NoPage } />
        </Switch>
      </div>
    );
  }
}

export default Main;