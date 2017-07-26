import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { offcanvas } from 'uikit';

import navpages from './navpages';
import logo from '../../../assets/images/logo2-dblue.png';
import options from './components/option-links';

class HamburgerMenu extends Component {
  handleLogout = () => {
    this.props.logout();
    offcanvas('#main').hide();
  };

  render() {
    return (
      <div id="main" data-uk-offcanvas="overlay: true; mode: reveal;">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li><img src={logo} alt="fost.r" style={{ height: '160px' }} /></li>
            <li className="uk-nav-header">Navigation</li>
            {navpages.map((link, key) =>
              <li key={key}>
                <NavLink
                  to={link.href}
                  activeClassName="active"
                  data-uk-toggle="target: #main">
                  {link.label}
                </NavLink>
              </li>
            )}
            <li className="uk-nav-header">More Options</li>
            <li>
              <ul className="uk-nav-sub">
                {options.map((link, key) =>
                  <li key={key}>
                    <Link to={link.route} data-uk-toggle="target: #main">
                      {link.label}
                    </Link>
                  </li>
                )}
                <li className="uk-nav-divider" />
                <li>
                  <button
                    className="uk-button uk-icon"
                    onClick={this.handleLogout}>
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: sign-out; ratio: 0.75"
                    />Sign out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
