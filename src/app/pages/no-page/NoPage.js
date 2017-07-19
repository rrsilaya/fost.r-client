import React, { Component } from 'react';
import image from './../../../assets/images/errorPage.png';

class NoPage extends Component {
  render() {
    return (
      <div className="full uk-flex uk-flex-middle uk-flex-center">
        <div className="uk-text-center">
          <img className="no-page" src={image} alt="Error 404" />
          <h2 className="uk-margin-small-top">
            Oops! It seems like you're lost.
          </h2>
          <p className="uk-container uk-container-small uk-text-meta uk-margin-remove">
            It seems like you're entering a page that you have no permission to
            access or accessing a page that does not exist.
          </p>
        </div>
      </div>
    );
  }
}

export default NoPage;
