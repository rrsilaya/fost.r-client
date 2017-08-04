import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/images/logo3-white.png';

const Navigation = () => {
  return (
    <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li><Link to="/login">Login</Link></li>
          <li>
            <Link to="/"><img src={logo} style={{ height: '42px' }} /></Link>
          </li>
          <li><Link to="/register">SignUp</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
