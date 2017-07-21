import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Panel from './components/Panel';
import Main from './components/Main';

class Settings extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r">
        <div>
          <h1>
            Account Settings
          </h1>
          <Panel />
        </div>
      </DocumentTitle>
    );
  }
}
export default Settings;
