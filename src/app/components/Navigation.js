import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="uk-section-primary" id="nav" data-uk-sticky>
        <nav
          className="uk-navbar-container uk-navbar-transparent"
          data-uk-navbar>
          <div className="uk-navbar-left">
            <div className="uk-margin-large-left uk-visible@m">
              <Link to="/adopt" className="uk-navbar-item uk-logo">
                fost.r
              </Link>
            </div>
            <button
              className="uk-button uk-hidden@m"
              data-uk-icon="icon: menu"
              data-uk-toggle="target: #main"
            />
          </div>

          <div className="uk-navbar-center uk-hidden@m">
            <Link to="/adopt" className="uk-navbar-item uk-logo">fost.r</Link>
          </div>

          <div className="uk-navbar-right uk-margin-large-right">
            <ul className="uk-navbar-nav uk-visible@m">
              <li>
                <NavLink to="/adopt" activeClassName="active">
                  Adopt
                </NavLink>
              </li>
              <li>
                <NavLink to="/dates" activeClassName="active">
                  Dates
                </NavLink>
              </li>
              <li>
                <NavLink to="/rescue" activeClassName="active">
                  Rescue
                </NavLink>
              </li>
              <li>
                <NavLink to="/community" activeClassName="active">
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
