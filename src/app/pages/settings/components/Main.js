import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProfileSettings from './ProfileSettings';
import PrivacySettings from './PrivacySettings';
import ShelterSettings from './ShelterSettings';
import TransactionsSettings from './TransactionsSettings';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/settings/profile" component={ProfileSettings} />
        <Route exact path="/settings/privacy" component={PrivacySettings} />
        <Route exact path="/settings/shelters" component={ShelterSettings} />
        <Route
          exact
          path="/settings/transactions"
          component={TransactionsSettings}
        />
      </Switch>
    );
  }
}

export default Main;
