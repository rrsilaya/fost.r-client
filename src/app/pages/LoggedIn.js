import React, { Component } from 'react';

import Navigation from '../components/navigation/Navigation';
import HamburgerMenu from '../components/navigation/HamburgerMenu';
import Main from '../components/Main';

class LoggedIn extends Component {
  render() {
    return (
      <div>
        <Navigation
          logout={this.props.logout}
          hasNotification={this.props.hasNotification}
          clearNotif={this.props.clearNotif}
        />
        <HamburgerMenu logout={this.props.logout} />
        <Main />
      </div>
    );
  }
}

export default LoggedIn;
