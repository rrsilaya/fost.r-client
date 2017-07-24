import React from 'react';

import ActivePostItem from './ActivePostItem';
import CenterLoader from '../../../components/CenterLoader';

const UserControls = ({ posts, isLoading, hasFailed }) => {
  return (
    <div className="uk-section uk-padding-large community-user-controls uk-section-secondary">
      <h4>Your Active Posts</h4>
      <ul className="uk-list uk-list-divider">
        {isLoading
          ? <CenterLoader />
          : hasFailed
            ? <div className="uk-text-center">An error occured.</div>
            : posts.length === 0
              ? <div className="uk-text-center uk-text-muted">
                  No active posts yet.
                </div>
              : posts.map((post, key) =>
                  <ActivePostItem
                    id={post._id}
                    content={post.content}
                    votes={0}
                    key={key}
                  />
                )}
        <li className="uk-text-center">
          <div className="uk-button-group">
            <button
              className="uk-button uk-button-default"
              disabled={posts.length < 1}>
              View all
            </button>
            <button className="uk-button uk-button-primary">New post</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserControls;