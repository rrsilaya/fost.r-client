import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import UserControls from './components/UserControls';
import CommunityFeed from './components/CommunityFeed';

class Community extends Component {
  componentDidMount() {
    // Active Posts
    if (this.props.userActivePosts.length === 0) this.props.getActivePosts();
    // Feed Posts
    if (this.props.userFeedPosts.length === 0) this.props.getFeedPosts('top');
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Community">
        <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top uk-margin-medium-bottom">
          <UserControls
            posts={this.props.userActivePosts}
            isLoading={this.props.isGettingActivePosts}
            hasFailed={this.props.isGettingActivePostsFailed}
          />
          <CommunityFeed
            activeTab={this.props.activeTab}
            handleTabChange={this.props.handleTabChange}
            changeCategory={this.props.getFeedPosts}
            posts={this.props.userFeedPosts}
            isLoading={this.props.isGettingFeedPosts}
            hasFailed={this.props.isGettingFeedPostsFailed}
          />
        </div>
      </DocumentTitle>
    );
  }
}

export default Community;
