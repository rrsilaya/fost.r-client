import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="uk-section-primary" id="nav">
        <nav className="uk-navbar-container uk-navbar-transparent uk-margin-medium-left uk-margin-medium-right" data-uk-navbar data-uk-sticky>
          <div className="uk-navbar-left">
            <Link to="/" className="uk-navbar-item uk-logo" >fost.r</Link>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li><Link to="/adopt">Adopt</Link></li>
              <li><Link to="/dates">Dates</Link></li>
              <li><Link to="/rescue">Rescue</Link></li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;