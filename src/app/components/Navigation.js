import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

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
              <li><NavLink to="/adopt" activeClassName="active">Adopt</NavLink></li>
              <li><NavLink to="/dates" activeClassName="active">Dates</NavLink></li>
              <li><NavLink to="/rescue" activeClassName="active">Rescue</NavLink></li>
              <li><NavLink to="/community" activeClassName="active">Community</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;