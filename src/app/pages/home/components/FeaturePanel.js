import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeaturePanel extends Component {
  render() {
    return (
      <div className="uk-position-top-center">
        <ul data-uk-tab>
          <li className=""> <a href="#"> Contact Us </a> </li>
          <li className="uk-active"><a href="#">Help</a></li>
          <li><Link to="/login">Sign Up</Link></li>
        </ul>
      </div>
    );
  }
}

export default FeaturePanel;
