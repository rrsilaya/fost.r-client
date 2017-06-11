import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adopt">Adopt</Link></li>
          <li><Link to="/dates">Dates</Link></li>
          <li><Link to="/rescue">Rescue</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;