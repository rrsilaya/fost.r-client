import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FeedContainer from '../pages/feed/FeedContainer';
import PetProfileContainer from '../pages/pet-profile/PetProfileContainer';
import CommunityContainer from '../pages/community/CommunityContainer';
import CommunityPostContainer from '../pages/community-post/CommunityPostContainer';
import NoPage from '../pages/no-page/NoPage';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/feed" />
        <Redirect exact from="/login" to="/feed" />

        <Route exact path="/feed" component={FeedContainer} />
        <Route exact path="/feed/:id/:page" component={PetProfileContainer} />
        <Route exact path="/community" component={CommunityContainer} />
        <Route
          exact
          path="/community/post/:id"
          component={CommunityPostContainer}
        />
        <Route exact path="/notifications" />

        <Route component={NoPage} />
      </Switch>
    );
  }
}

export default Main;
