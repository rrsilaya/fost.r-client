import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import HamburgerMenu from '../components/HamburgerMenu';
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
