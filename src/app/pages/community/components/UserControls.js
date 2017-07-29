import React from 'react';

import ActivePostItem from './ActivePostItem';
import CenterLoader from '../../../components/CenterLoader';

const UserControls = ({ posts, isLoading, hasFailed }) => {
  return (
    <div className="uk-section uk-padding-large community-user-controls uk-section-secondary">
      <h4>Your Active Posts</h4>
      <div className="uk-panel-scrollable post-list uk-padding-remove uk-margin-small-bottom uk-width-1-1">
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
                      key={key}
                      id={post.post_uuid}
                      title={post.post_title}
                      content={post.text_post}
                      votes={post.votes}
                    />
                  )}
        </ul>
      </div>

      <div className="uk-text-center">
        <button
          className="uk-button uk-button-primary"
          data-uk-toggle="target: #newpost">
          New post
        </button>
      </div>
    </div>
  );
};

export default UserControls;
