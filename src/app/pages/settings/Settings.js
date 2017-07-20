import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Panel from './components/Panel';

class Settings extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r">
        <div className="uk-width-1-2 uk-position-center uk-background-secondary uk-light uk-padding uk-panel">
          <Panel />
        </div>
      </DocumentTitle>
    );
  }
}

export default Settings;
