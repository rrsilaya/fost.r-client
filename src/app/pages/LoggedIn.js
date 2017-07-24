import React, { Component } from 'react';

import Navigation from '../components/navigation/Navigation';
import HamburgerMenu from '../components/navigation/HamburgerMenu';
import Main from '../components/Main';

class LoggedIn extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <HamburgerMenu />
        <Main />
      </div>
    );
  }
}

export default LoggedIn;
