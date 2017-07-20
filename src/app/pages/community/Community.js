import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import UserControls from './components/UserControls';
import CommunityFeed from './components/CommunityFeed';

class Community extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Community">
        <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top uk-margin-medium-bottom">
          <UserControls />
          <CommunityFeed activeTab={this.props.match.params.feed} />
        </div>
      </DocumentTitle>
    );
  }
}

export default Community;
