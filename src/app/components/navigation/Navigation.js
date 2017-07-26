import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import navpages from './navpages';
import logo from '../../../assets/images/logo3-white.png';
import MoreOptions from './components/MoreOptions';

class Navigation extends Component {
  render() {
    return (
      <div className="uk-section-primary" id="nav" data-uk-sticky>
        <nav
          className="uk-navbar-container uk-navbar-transparent"
          data-uk-navbar>
          <div className="uk-navbar-left">
            <div className="uk-margin-large-left uk-visible@m">
              <Link to="/feed" className="uk-navbar-item uk-logo">
                <img src={logo} alt="fost.r" className="nav-logo" />
              </Link>
            </div>
            <button
              className="uk-button uk-hidden@m"
              data-uk-icon="icon: menu"
              data-uk-toggle="target: #main"
            />
          </div>

          <div className="uk-navbar-center uk-hidden@m">
            <Link to="/feed" className="uk-navbar-item uk-logo">
              <img src={logo} alt="fost.r" className="nav-logo" />
            </Link>
          </div>

          <div className="uk-navbar-right uk-margin-large-right uk-text-right">
            <ul className="uk-navbar-nav uk-visible@m">
              {navpages.map(
                (link, key) =>
                  this.props.accountType === 'user' && link.label === 'Admin'
                    ? ''
                    : <li key={key}>
                        <NavLink to={link.href} activeClassName="active">
                          {link.label}
                        </NavLink>
                      </li>
              )}
            </ul>

            <Link
              to="/notifications"
              className="uk-button uk-margin-small-left uk-margin-small-right uk-padding-remove uk-icon notif-wrapper uk-inline">
              <span className="uk-icon notif-bell" data-uk-icon="icon: bell" />
              {this.props.hasNotification
                ? <span className="uk-badge uk-position-top-right notif-badge" />
                : ''}
            </Link>

            <button
              className="uk-visible@m uk-button uk-margin-small-right uk-margin-small-left uk-padding-remove"
              data-uk-icon="icon: triangle-down"
            />
            <MoreOptions logout={this.props.logout} />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
