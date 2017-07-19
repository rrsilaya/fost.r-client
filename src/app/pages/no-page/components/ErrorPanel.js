import React, { Component } from 'react';
import image from './../../../../assets/images/errorPage.png';

class NoPage extends Component {
  render() {
    return (
      <div className="uk-text-center uk-position-center">
        <div className="uk-inline-clip uk-transition-toggle uk-light">
          <img className="uk-border-circle" src={image} alt="image" />
        </div>
        <h1 className="uk-margin-small-top">
          <b>
            Oops! You have reached 404 page!
          </b>
        </h1>
        <h1>
          • Reload the page <br /> • Try another route
        </h1>
      </div>
    );
  }
}

export default NoPage;
