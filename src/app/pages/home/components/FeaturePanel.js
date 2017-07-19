import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeaturePanel extends Component {
  render() {
    return (
      <div className="uk-position-right">
        <ul data-uk-tab>
          <li className="uk-active"><a href="#">Sign Up</a></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    );
  }
}

export default FeaturePanel;
