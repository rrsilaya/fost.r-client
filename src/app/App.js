import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import '../assets/css/App.css';

import LoggedIn from './pages/LoggedIn';
import AnonUser from './pages/AnonUser';
import FullLoader from './components/FullLoader';

class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <Router history={withRouter}>
        <div className="uk-offcanvas-content">
          {this.props.isLoading
            ? <FullLoader />
            : this.props.isAuth
              ? <LoggedIn
                  logout={this.props.logout}
                  hasNotification={this.props.hasNotification}
                  clearNotif={this.props.clearNotif}
                  accountType={this.props.accountType}
                />
              : <AnonUser />}
        </div>
      </Router>
    );
  }
}

export default App;
