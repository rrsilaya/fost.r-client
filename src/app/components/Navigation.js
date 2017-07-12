import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import navpages from './navpages';
import logo from '../../assets/images/logo3-white.png';

class Navigation extends Component {
  render() {
    return (
      <div className="uk-section-primary" id="nav" data-uk-sticky>
        <nav
          className="uk-navbar-container uk-navbar-transparent"
          data-uk-navbar>
          <div className="uk-navbar-left">
            <div className="uk-margin-large-left uk-visible@m">
              <Link to="/feed" className="uk-navbar-item uk-logo">
                <img src={logo} alt="fost.r" className="nav-logo" />
              </Link>
            </div>
            <button
              className="uk-button uk-hidden@m"
              data-uk-icon="icon: menu"
              data-uk-toggle="target: #main"
            />
          </div>

          <div className="uk-navbar-center uk-hidden@m">
            <Link to="/feed" className="uk-navbar-item uk-logo">
              <img src={logo} alt="fost.r" className="nav-logo" />
            </Link>
          </div>

          <div className="uk-navbar-right uk-margin-large-right">
            <ul className="uk-navbar-nav uk-visible@m">
              {navpages.map((link, key) =>
                <li key={key}>
                  <NavLink to={link.href} activeClassName="active">
                    {link.label}
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
