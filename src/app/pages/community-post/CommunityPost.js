import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link, Redirect } from 'react-router-dom';

import CenterLoader from '../../components/CenterLoader';
import Post from './components/Post';
import Replies from './components/Replies';
import ReplyForm from './components/ReplyForm';

class CommunityPost extends Component {
  componentDidMount() {
    const post_uuid = this.props.match.params.id;

    this.props.getPostData(post_uuid);
    if (this.props.activePost) this.props.getPostComments(post_uuid);
  }

  render() {
    return (
      <DocumentTitle
        title={`fost.r${!this.props.isLoading && this.props.activePost
          ? ` • ${this.props.activePost.post_title}`
          : ''}`}>
        <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top uk-margin-medium-bottom">
          {this.props.deleteSuccess ? <Redirect to="/community" /> : ''}
          {this.props.isLoading
            ? <CenterLoader />
            : this.props.hasFailed
              ? <div className="uk-text-center">An error occured.</div>
              : !this.props.activePost
                ? <Redirect to="/community" />
                : <div>
                    <ul className="uk-breadcrumb">
                      <li><Link to="/community">Community Feed</Link></li>
                      <li className="post-breadcrumb uk-text-truncate">
                        {this.props.activePost.post_title}
                      </li>
                    </ul>
                    <Post
                      id={this.props.activePost.post_uuid}
                      votes={this.props.activePost.votes}
                      title={this.props.activePost.post_title}
                      content={this.props.activePost.text_post}
                      author={this.props.activePost.Posted_by}
                      time={this.props.activePost.created_at}
                      activeUser={this.props.activeUser}
                      deletePost={this.props.deletePost}
                      type="post"
                    />
                    <ReplyForm
                      id={this.props.activePost.post_uuid}
                      updateForm={this.props.updateForm}
                      replyForm={this.props.replyForm}
                      replyToPost={this.props.replyToPost}
                      resetForm={this.props.resetForm}
                    />
                    <Replies
                      isLoading={this.props.isLoadingComments}
                      hasFailed={this.props.isLoadingCommentsFailed}
                      comments={this.props.comments}
                      pagination={this.props.pagination}
                      pageTotal={this.props.pageTotal}
                      isAppending={this.props.isAppending}
                      getMoreComments={this.props.getMoreComments}
                      id={this.props.match.params.id}
                    />
                  </div>}
        </div>
      </DocumentTitle>
    );
  }
}

export default CommunityPost;
