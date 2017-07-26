import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import '../assets/css/App.css';

import LoggedIn from './pages/LoggedIn';
import AnonUser from './pages/AnonUser';

class App extends Component {
  render() {
    return (
      <Router history={withRouter}>
        <div className="uk-offcanvas-content">
          {this.props.isAuth
            ? <LoggedIn logout={this.props.logout} />
            : <AnonUser />}
        </div>
      </Router>
    );
  }
}

export default App;
