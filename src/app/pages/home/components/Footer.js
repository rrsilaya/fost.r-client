import React from 'react';

import logo from '../../../../assets/images/logo3-white.png';

const Footer = () => {
  return (
    <div className="uk-section uk-section-secondary uk-padding-small">
      <div
        className="uk-margin-medium-left uk-margin-medium-right uk-grid-small uk-child-width-auto@s uk-child-width-1-1 uk-flex uk-flex-between"
        data-uk-grid>
        <div className="uk-text-left@s uk-text-center">
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

        </div>
        <div className="uk-text-right@s uk-text-center">
          <img
            src={logo}
            className="uk-margin-small-top"
            alt=""
            style={{ height: '36px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
