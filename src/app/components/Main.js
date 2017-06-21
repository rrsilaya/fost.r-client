import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AdoptContainer from '../pages/adopt/AdoptContainer';
import DatesContainer from '../pages/dates/DatesContainer';
import RescueContainer from '../pages/rescue/RescueContainer';
import CommunityContainer from '../pages/community/CommunityContainer';
import NoPageContainer from '../pages/no-page/NoPageContainer';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="adopt" />
        <Redirect exact from="/login" to="adopt" />

        <Route exact path="/adopt" component={AdoptContainer} />
        <Route exact path="/dates" component={DatesContainer} />
        <Route exact path="/rescue" component={RescueContainer} />
        <Route exact path="/community" component={CommunityContainer} />

        <Route component={NoPageContainer} />
      </Switch>
    );
  }
}

export default Main;
