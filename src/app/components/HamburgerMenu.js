import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import navpages from './navpages';
import logo from '../../assets/images/logo2-dblue.png';

class HamburgerMenu extends Component {
  render() {
    return (
      <div id="main" data-uk-offcanvas="overlay: true; mode: push;">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li><img src={logo} alt="fost.r" style={{ height: '160px' }} /></li>
            <li className="uk-nav-header">Navigation</li>
            {navpages.map((link, key) =>
              <li key={key}>
                <NavLink to={link.href} activeClassName="active">
                  {link.label}
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
