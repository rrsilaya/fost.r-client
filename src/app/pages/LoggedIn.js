import React, { Component } from 'react';

import Navigation from '../components/navigation/Navigation';
import HamburgerMenu from '../components/navigation/HamburgerMenu';
import Main from '../components/Main';
import Footer from '../components/Footer';

class LoggedIn extends Component {
  render() {
    return (
      <div>
        <Navigation
          logout={this.props.logout}
          hasNotification={this.props.hasNotification}
          accountType={this.props.accountType}
        />
        <HamburgerMenu
          logout={this.props.logout}
          accountType={this.props.accountType}
        />

        <div className="main-wrapper">
          <Main
            clearNotif={this.props.clearNotif}
            accountType={this.props.accountType}
          />
          {window.location.pathname.startsWith('/feed')
            ? ''
            : <Footer accountType={this.props.accountType} />}
        </div>
      </div>
    );
  }
}

export default LoggedIn;
