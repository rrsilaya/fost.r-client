import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FeedContainer from '../pages/feed/FeedContainer';
import PetProfileContainer from '../pages/pet-profile/PetProfileContainer';
import PetRequestContainer from '../pages/pet-request/PetRequestContainer';
import CommunityContainer from '../pages/community/CommunityContainer';
import NoPage from '../pages/no-page/NoPage';
import Settings from '../pages/settings/SettingsContainer';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/feed" />
        <Redirect exact from="/login" to="/feed" />

        <Route exact path="/feed" component={FeedContainer} />
        <Route exact path="/feed/:id" component={PetProfileContainer} />
        <Route exact path="/feed/:id/:action" component={PetRequestContainer} />
        <Route exact path="/community" component={CommunityContainer} />
        <Route exact path="/settings" component={Settings} />
        <Route component={NoPage} />
      </Switch>
    );
  }
}

export default Main;
