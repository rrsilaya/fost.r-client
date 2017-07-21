import React, { Component } from 'react';
import logo from './../../../../assets/images/homeIcon.png';

class WelcomePanel extends Component {
  render() {
    return (
      <div className="uk-text-center">
        <img
          className="uk-padding-medium uk-padding-remove-bottom uk-thumbnail uk-thumbnail-xsmall"
          src={logo}
          alt="logo image"
        />
        <h1 className="uk-padding-remove">
          {' '}<b> Adopting animals has never been so easy! </b>{' '}
        </h1>
        <h3 className="uk-padding-remove-top">
          <i>
            {' '} "...Connecting animals and humans since 2017..."{' '}
          </i>
        </h3>
        <p uk-margin>
          {' '}<button className="uk-button uk-button-danger">ADOPT NOW</button>
        </p>

      </div>
    );
  }
}

export default WelcomePanel;
