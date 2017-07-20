import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileSettings from './ProfileSettings';
import PrivacySettings from './PrivacySettings';
import ShelterSettings from './ShelterSettings';
import TransactionsSettings from './TransactionsSettings';

class Panel extends Component {
  render() {
    return (
      <div>
        <ul className="uk-tab-right" data-uk-tab>
          <li className="uk-active">
            <a href="#">    <span data-uk-icon="icon: user" /> Profile</a>
          </li>
          <li>
            <a href="#">
              {' '}   <span data-uk-icon="icon: lock" /> Password and Privacy
            </a>
          </li>
          <li>
            <a href="#">
              {' '}   <span data-uk-icon="icon: home" /> Muted Shelters
            </a>
          </li>
          <li>
            <a href="#">
              {' '}   <span data-uk-icon="icon: push" /> Pending Transactions
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Panel;

<Switch>
  <Route exact path="/settings/account" component={AccountSettings} />
  <Route exact path="/settings/profile" component={ProfileSettings} />
  <Route exact path="/settings/friends" component={FriendsSettings} />
</Switch>;
