import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Panel extends Component {
  render() {
    return (
      <div>
        <ul className="uk-tab-right" data-uk-tab>
          <li className="uk-active">
            <a href="#">    <span data-uk-icon="icon: user" /> Profile</a>
          </li>
          <li>
            <NavLink to="/settings/privacy">
              {' '}   <span data-uk-icon="icon: lock" /> Password and Privacy
            </NavLink>
          </li>
          <li>
            <a href="#">
              {' '}   <span data-uk-icon="icon: home" /> Muted Shelters
            </a>
          </li>
          <li>
            <a href="#">
              {' '}   <span data-uk-icon="icon: push" /> Pending Transactions
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Panel;
