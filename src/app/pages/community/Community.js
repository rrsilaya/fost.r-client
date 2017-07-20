import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Redirect } from 'react-router-dom';

import UserControls from './components/UserControls';
import CommunityFeed from './components/CommunityFeed';

const pages = ['top', 'featured', 'unanswered'];

class Community extends Component {
  handleLoad = () => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i] === this.props.match.params.feed) {
        return true;
      }
    }

    return false;
  };

  componentDidMount() {
    // Active Posts
    if (this.props.userActivePosts.length === 0) this.props.getActivePosts();
    // Feed Posts
    if (this.props.userFeedPosts.length === 0) this.props.getFeedPosts();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Community">
        {this.handleLoad()
          ? <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top uk-margin-medium-bottom">
              <UserControls
                posts={this.props.userActivePosts}
                isLoading={this.props.isGettingActivePosts}
                hasFailed={this.props.isGettingActivePostsFailed}
              />
              <CommunityFeed
                activeTab={this.props.match.params.feed}
                posts={this.props.userFeedPosts}
                isLoading={this.props.isGettingFeedPosts}
                hasFailed={this.props.isGettingFeedPostsFailed}
              />
            </div>
          : <Redirect to="/community/top" />}
      </DocumentTitle>
    );
  }
}

export default Community;
