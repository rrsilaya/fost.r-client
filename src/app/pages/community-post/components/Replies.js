import React from 'react';
import moment from 'moment';

import Post from './Post';
import CenterLoader from '../../../components/CenterLoader';

const Replies = ({ isLoading, hasFailed, comments }) => {
  return (
    <div>
      <h3 className="uk-heading-divider">Replies</h3>

      {isLoading
        ? <CenterLoader />
        : hasFailed
          ? <div className="uk-text-center">An error occured.</div>
          : <div>
              <ul className="uk-list uk-list-divider">
                {comments.map((comment, key) =>
                  <li key={key}>
                    <Post
                      votes={comment.votes}
                      content={comment.comment_body}
                      author={comment.commented_by}
                      time={comment.created_at}
                      type="comment"
                    />
                  </li>
                )}
              </ul>
              <div className="uk-text-center">
                {comments.length
                  ? <button className="uk-button uk-button-default">
                      Load more
                    </button>
                  : <span className="uk-text-meta">
                      No replies in this post yet.
                    </span>}
              </div>
            </div>}
    </div>
  );
};

export default Replies;
