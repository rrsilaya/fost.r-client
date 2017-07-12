import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FeedContainer from '../pages/feed/FeedContainer';
import DatesContainer from '../pages/dates/DatesContainer';
import RescueContainer from '../pages/rescue/RescueContainer';
import CommunityContainer from '../pages/community/CommunityContainer';
import NoPageContainer from '../pages/no-page/NoPageContainer';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/feed" />
        <Redirect exact from="/login" to="/feed" />

        <Route exact path="/feed" component={FeedContainer} />
        <Route exact path="/dates" component={DatesContainer} />
        <Route exact path="/community" component={CommunityContainer} />

        <Route component={NoPageContainer} />
      </Switch>
    );
  }
}

export default Main;
