import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import UserControls from './components/UserControls';
import CommunityFeed from './components/CommunityFeed';
import NewPost from './components/NewPost';

class Community extends Component {
  componentDidMount() {
    this.props.getActivePosts();
    this.props.getFeedPosts(this.props.activeTab);
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
          <NewPost
            updateForm={this.props.updateForm}
            form={this.props.form}
            addPost={this.props.addPost}
          />
        </div>
      </DocumentTitle>
    );
  }
}

export default Community;
