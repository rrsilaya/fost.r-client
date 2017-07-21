import React, { Component } from 'react';
import logo from './../../../../assets/images/homeIcon.png';

class WelcomePanel extends Component {
  render() {
    return (
      <div className="uk-text-center">
        <img
          className="uk-padding-large uk-padding-remove-bottom uk-thumbnail uk-thumbnail-xsmall"
          src={logo}
          alt="logo image"
        />
        <h1 className="uk-padding-remove"> <b> Welcome to fost.r! </b> </h1>
        <h3 className="uk-padding-remove-top">
          {' '}Have a companion with just a click!{' '}
        </h3>

      </div>
    );
  }
}

export default WelcomePanel;
