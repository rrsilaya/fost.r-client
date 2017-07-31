import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AccountSettings from './AccountSettingsContainer';
import PrivacySettings from './PrivacySettings';
import ShelterSettings from './ShelterSettings';
import TransactionsSettings from './TransactionsSettings';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path from="/settings" to="/settings/AccountSettings" />;

        <Route
          exact
          path="/settings/AccountSettings"
          component={AccountSettings}
        />
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
