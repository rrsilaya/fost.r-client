import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

class Adopt extends Component {
  componentDidMount() {
    if (this.props.feed.length === 0) this.props.loadPets();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Adopt">
        <div>
          <div className="uk-section tm-sidebar-left">
            <Sidebar pets={this.props.pets} />
          </div>
          <div className="uk-margin-large-top uk-margin-large-bottom uk-position-relative tm-main">
            <Feed isLoading={this.props.isFeedLoading} feed={this.props.feed} />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Adopt;
