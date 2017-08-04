import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/images/logo1-white.png';

const Logo = () => {
  return (
    <div className="uk-text-center uk-margin-medium-top">
      <img src={logo} alt="" className="splash-logo" />
      <h2>Connecting people with animals</h2>

      <div className="uk-margin-small-top">
        <Link to="/register" className="uk-button splash-btn">Start Now</Link>
      </div>
    </div>
  );
};

export default Logo;
