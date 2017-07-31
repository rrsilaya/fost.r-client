import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import Main from './Main';
import MainContainer from './MainContainer';
import AccountSettings from './components/AccountSettingsContainer';

class Navigation extends Component {
  render() {
    return (
      <div>
        <h2 className="uk-padding-small"> Account Settings </h2>
        <ul
          className="uk-tab-right"
          data-uk-tab
          data-uk-switcher="{connect:'#my-id'}">
          <li className="uk-active">
            <Link to="/settings/AccountSettings">
              <span data-uk-icon="icon: user" />Profile
            </Link>
          </li>
          <li>
            <Link to="/settings/PrivacySettings">
              <span data-uk-icon="icon: lock" />Privacy
            </Link>
          </li>
          <li>
            <Link to="/settings/ShelterSettings">
              <span data-uk-icon="icon: home" />Muted Shelters
            </Link>
          </li>
          <li>
            <Link to="/settings/TransactionSettings">
              <span data-uk-icon="icon: push" />Transactions
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
