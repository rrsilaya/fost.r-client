import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Stats from './components/Stats';

class Admin extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Admin">
        <div className="uk-container uk-container-small uk-margin-medium-top">
          <Stats />
        </div>
      </DocumentTitle>
    );
  }
}

export default Admin;
