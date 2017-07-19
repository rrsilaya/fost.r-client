import React, { Component } from 'react';

class WelcomePanel extends Component {
  render() {
    return (
      <div className="uk-text-center">
        <h1 className="uk-padding-xlarge uk-padding-remove-bottom">
          <b>
            Be part of the Adopting Community!
          </b>
        </h1>
        <h2>
          Have a companion with just a click!
        </h2>
        <button className="uk-button uk-button-danger">Login</button>
        <div className="uk-padding-large" />
      </div>
    );
  }
}

export default WelcomePanel;
