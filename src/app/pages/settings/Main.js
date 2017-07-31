import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AccountSettings from './components/AccountSettingsContainer';
import PrivacySettings from './components/PrivacySettingsContainer';
import ShelterSettings from './components/SheltersContainer';
import TransactionSettings from './components/TransactionsContainer';
import NoPage from './../no-page/NoPage';
import NavigationContainer from './NavigationContainer';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/settings" to="/settings/AccountSettings" />

          <Route
            exact
            path="/settings/AccountSettings"
            component={AccountSettings}
          />
          <Route
            exact
            path="/settings/PrivacySettings"
            component={PrivacySettings}
          />
          <Route
            exact
            path="/settings/ShelterSettings"
            component={ShelterSettings}
          />
          <Route
            exact
            path="/settings/TransactionSettings"
            component={TransactionSettings}
          />
          <Route component={NoPage} />
        </Switch>
      </div>
    );
  }
}

export default Main;
