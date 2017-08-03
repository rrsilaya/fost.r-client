import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo3-white.png';

const AnonNav = () => {
  return (
    <div
      className="uk-section-secondary uk-margin-medium-bottom"
      id="nav"
      data-uk-sticky>
      <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
        <div className="uk-navbar-center">
          <Link to="/feed" className="uk-navbar-item uk-logo">
            <img src={logo} alt="fost.r" className="nav-logo" />
          </Link>
        </div>

        <div className="uk-navbar-right uk-margin-large-right">
          <ul className="uk-navbar-nav">
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AnonNav;
