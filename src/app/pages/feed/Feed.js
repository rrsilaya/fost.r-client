import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Feed from './components/Feed';

class Adopt extends Component {
  componentDidMount() {
    this.props.loadPets();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Feed">
        <div>
          <div
            className="uk-hidden@m uk-background-default"
            data-uk-sticky="offset: 65">
            <Topbar pets={this.props.pets} filterFeed={this.props.filterFeed} />
          </div>
          <div className="uk-section tm-sidebar-left uk-visible@m">
            <Sidebar pets={this.props.pets} />
          </div>
          <div className="uk-position-relative tm-main">
            <Feed
              isLoading={this.props.isFeedLoading}
              hasErrorLoading={this.props.hasErrorLoading}
              feed={this.props.feed}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Adopt;
