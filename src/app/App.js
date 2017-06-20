import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import '../assets/css/App.css';

import LoggedIn from './pages/LoggedIn';
import AnonUser from './pages/AnonUser';

class App extends Component {
  render() {
    return (
      <Router history={withRouter}>
        {
          this.props.auth ?
          <LoggedIn />
          :
          <AnonUser />
        }
      </Router>
    );
  }
}

export default App;
