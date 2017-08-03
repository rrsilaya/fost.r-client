import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FeedContainer from '../pages/feed/FeedContainer';
import PetProfileContainer from '../pages/pet-profile/PetProfileContainer';
import CommunityContainer from '../pages/community/CommunityContainer';
import CommunityPostContainer from '../pages/community-post/CommunityPostContainer';
import NotificationsContainer from '../pages/notifications/NotificationsContainer';
import AdminContainer from '../pages/admin/AdminContainer';
import RescueContainer from '../pages/rescue/RescueContainer';
import NoPage from '../pages/no-page/NoPage';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Redirect
            exact
            from="/"
            to={this.props.accountType === 'user' ? '/feed' : '/admin'}
          />
          <Redirect
            exact
            from="/login"
            to={this.props.accountType === 'user' ? '/feed' : '/admin'}
          />

          <Route exact path="/feed" component={FeedContainer} />
          <Route exact path="/feed/:id/:page" component={PetProfileContainer} />
          <Route exact path="/community" component={CommunityContainer} />
          <Route
            exact
            path="/community/post/:id"
            component={CommunityPostContainer}
          />
          <Route
            exact
            path="/notifications"
            render={() =>
              <NotificationsContainer clearNotif={this.props.clearNotif} />}
          />
          {this.props.accountType !== 'user' &&
            <Route exact path="/admin" component={AdminContainer} />}
          <Route exact path="/rescue" component={RescueContainer} />

          <Route component={NoPage} />
        </Switch>
      </div>
    );
  }
}

export default Main;
