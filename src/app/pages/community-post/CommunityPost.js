import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link, Redirect } from 'react-router-dom';

import CenterLoader from '../../components/CenterLoader';
import MainPost from './components/MainPost';
import Replies from './components/Replies';

class CommunityPost extends Component {
  componentDidMount() {
    this.props.getPostData(this.props.match.params.id);
  }

  render() {
    return (
      <DocumentTitle
        title={`fost.r${!this.props.isLoading && this.props.activePost
          ? ` • ${this.props.activePost.content
              .split(' ')
              .reverse()
              .splice(0, 5)
              .join(' ')}`
          : ''}`}>
        <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top uk-margin-medium-bottom">
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
                        {this.props.activePost.content
                          .split(' ')
                          .reverse()
                          .splice(0, 5)
                          .join(' ')}
                      </li>
                    </ul>
                    <MainPost
                      votes={-3}
                      content={this.props.activePost.content}
                      author={this.props.activePost.author}
                      time={this.props.activePost.date}
                    />
                    <Replies />
                  </div>}
        </div>
      </DocumentTitle>
    );
  }
}

export default CommunityPost;
