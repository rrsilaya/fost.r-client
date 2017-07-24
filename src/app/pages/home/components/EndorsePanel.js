import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from './../../../../assets/images/endorse.jpg';

class EndorsePanel extends Component {
  render() {
    return (
      <div
        className="uk-background-secondary uk-light uk-padding uk-panel uk-child-width-1-2 uk-child-width-1-1@s uk-grid-match uk-text-center"
        data-uk-grid>
        <div className="uk-inline">
          <img src={image} alt="" />
          <div className="uk-overlay uk-light uk-position-bottom uk-padding-top" />
        </div>
      </div>
    );
  }
}

export default EndorsePanel;
