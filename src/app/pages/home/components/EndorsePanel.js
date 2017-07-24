import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from './../../../../assets/images/endorse.jpg';

class EndorsePanel extends Component {
  render() {
    return (
      <div
        className="uk-container uk-background-secondary uk-light uk-padding uk-panel uk-child-width-1-1 uk-child-width-1-1@s uk-grid-match uk-text-center"
        data-uk-grid>
        <img src={image} alt="" />
      </div>
    );
  }
}

export default EndorsePanel;
