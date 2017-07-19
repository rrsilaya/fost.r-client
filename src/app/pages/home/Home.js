import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import FeaturePanel from './components/FeaturePanel';
import WelcomePanel from './components/WelcomePanel';
import SelectionPanel from './components/SelectionPanel';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r">
        <div className="uk-background-secondary uk-light uk-padding uk-panel">

          <img
            src="https://s-media-cache-ak0.pinimg.com/736x/85/03/0d/85030dacda1b1f91b92ff77056b17648--funny-animal-pics-animal-funnies.jpg"
            alt=""
          />

          <div className="uk-position-top-left uk-overlay uk-overlay-default">
            Top Left
          </div>
          <div className="uk-position-top-center uk-overlay uk-overlay-default">
            Top Center
          </div>
          <div className="uk-position-top-right uk-overlay uk-overlay-default">
            Top Right
          </div>
          <div className="uk-position-center-left uk-overlay uk-overlay-default">
            Center Left
          </div>
          <div className="uk-position-center uk-overlay uk-overlay-default">
            Center
          </div>
          <div className="uk-position-center-right uk-overlay uk-overlay-default">
            Center Right
          </div>
          <div className="uk-position-bottom-left uk-overlay uk-overlay-default">
            Bottom Left
          </div>
          <div className="uk-position-bottom-center uk-overlay uk-overlay-default">
            Bottom Center
          </div>
          <div className="uk-position-bottom-right uk-overlay uk-overlay-default">
            Bottom Right
          </div>

        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
