import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import UserControls from './components/UserControls';

class Community extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Community">
        <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top">
          <UserControls />
        </div>
      </DocumentTitle>
    );
  }
}

export default Community;
