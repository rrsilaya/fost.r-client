import React from 'react';

import Post from './Post';
import CenterLoader from '../../../components/CenterLoader';

const Replies = ({
  isLoading,
  hasFailed,
  comments,
  pagination,
  pageTotal,
  isAppending,
  getMoreComments,
  id
}) => {
  const handleAppend = () => {
    getMoreComments(id, pagination + 1);
  };

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
                      title={comment.comment_title}
                      content={comment.comment_body}
                      author={comment.commented_by}
                      time={comment.created_at}
                      type="comment"
                    />
                  </li>
                )}
              </ul>
              <div className="uk-text-center">
                {comments.length !== 0 && pageTotal !== 0
                  ? pagination === pageTotal
                    ? ''
                    : <div className="uk-text-center">
                        <button
                          className="uk-button uk-button-default append-button"
                          onClick={handleAppend}
                          disabled={isAppending}>
                          {isAppending
                            ? <div data-uk-spinner="ratio: 0.5" />
                            : 'Load more'}
                        </button>
                      </div>
                  : <span className="uk-text-meta">
                      No replies in this post yet.
                    </span>}
              </div>
            </div>}
    </div>
  );
};

export default Replies;
