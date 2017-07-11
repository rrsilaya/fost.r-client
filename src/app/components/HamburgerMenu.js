import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo2-dblue.png';

class HamburgerMenu extends Component {
  render() {
    return (
      <div id="main" data-uk-offcanvas="overlay: true; mode: push;">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li><img src={logo} alt="fost.r" style={{ height: '128px' }} /></li>
            <li className="uk-nav-header">Navigation</li>
            <li>
              <NavLink to="/adopt" activeClassName="active">Adopt</NavLink>
            </li>
            <li>
              <NavLink to="/dates" activeClassName="active">Dates</NavLink>
            </li>
            <li>
              <NavLink to="/rescue" activeClassName="active">Rescue</NavLink>
            </li>
            <li>
              <NavLink to="/community" activeClassName="active">
                Community
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HamburgerMenu;
