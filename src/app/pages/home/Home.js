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

          <FeaturePanel />
          <WelcomePanel />
          <SelectionPanel />

        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
