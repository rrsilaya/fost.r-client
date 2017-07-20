import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Panel extends Component {
  render() {
    return (
      <div>
        <ul className="uk-tab-right" data-uk-tab>
          <li className="uk-active"><a href="#">Profile</a></li>
          <li><a href="#">Password and Privacy</a></li>
          <li><a href="#">Muted Shelters</a></li>
          <li><a href="#">Pending Transactions</a></li>
        </ul>
      </div>
    );
  }
}

export default Panel;
