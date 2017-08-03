import React from 'react';
import { Link } from 'react-router-dom';

import navpages from './navigation/navpages';
import logo from '../../assets/images/logo1-white.png';

const Footer = ({ accountType }) => {
  return (
    <div className="uk-background-secondary uk-margin-medium-top uk-section uk-padding-large">
      <div
        className="footer uk-grid-small uk-margin-auto uk-flex uk-flex-between uk-child-width-auto@s uk-child-width-1-1"
        data-uk-grid>
        <div className="uk-visible@s">
          <ul className="uk-nav uk-text-small uk-light" data-uk-nav>
            {navpages.map(
              (link, key) =>
                accountType === 'user' && link.label === 'Admin'
                  ? ''
                  : <li key={key}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
            )}
            <li className="uk-nav-divider" />
          </ul>
        </div>

        <div className="uk-text-center uk-visible@s uk-light">
          <a
            href="https://www.facebook.com/fost.r"
            data-uk-icon="icon: facebook;"
            className="uk-padding-small"
          />
          <a
            href="https://www.twitter.com/fostr"
            data-uk-icon="icon: twitter;"
            className="uk-padding-small"
          />
          <a
            href="https://www.instagram.com/fostr"
            data-uk-icon="icon: instagram;"
            className="uk-padding-small"
          />

          <p className="uk-text-meta uk-margin-remove">
            fostr@fostr.com<br />
            (049) 123 2345
          </p>
        </div>

        <div className="uk-text-center">
          <img src={logo} className="footer-logo" alt="" />
        </div>
        <div className="uk-text-center uk-hidden@s uk-light">
          <a
            href="https://www.fostr.com"
            data-uk-icon="icon: facebook;"
            className="uk-padding-small"
          />
          <a
            href="https://www.twitter.com/fostr"
            data-uk-icon="icon: twitter;"
            className="uk-padding-small"
          />
          <a
            href="https://www.instagram.com/fostr"
            data-uk-icon="icon: instagram;"
            className="uk-padding-small"
          />
          <a
            href="https://www.facebook.com/fost.r"
            data-uk-icon="icon: world;"
            className="uk-padding-small"
          />

          <p className="uk-text-meta uk-margin-remove">
            fostr@fostr.com<br />
            (049) 123 2345
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
