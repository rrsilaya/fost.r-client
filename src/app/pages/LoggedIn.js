import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Main from '../components/Main';

class LoggedIn extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default LoggedIn;