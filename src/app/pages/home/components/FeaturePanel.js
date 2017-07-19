import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from './../../../../assets/images/logo1-white.png';

class FeaturePanel extends Component {
  render() {
    return (
      <div className="uk-position-top-center">
        <ul data-uk-tab>
          <li className=""> <a href="#"> Contact Us </a> </li>
          <li className="uk-active"><a href="#">Sign Up</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default FeaturePanel;
