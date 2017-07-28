import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, content, votes, answers }) => {
  return (
    <li>
      <div className="uk-grid-medium uk-grid-match" data-uk-grid>
        <div
          className="uk-text-center uk-grid-small uk-child-width-expand uk-flex uk-flex-middle"
          data-uk-grid>
          <div className="post-meta-tags">
            <span className="uk-text-large">{votes}</span><br />
            <span className="post-meta">votes</span>
          </div>
          <div className="post-meta-tags">
            <span className="uk-text-large">{answers}</span><br />
            <span className="post-meta">answers</span>
          </div>
        </div>

        <div className="uk-width-expand uk-flex uk-flex-middle">
          <h4 className="uk-text-primary uk-margin-remove">
            <Link to={`/community/post/${id}`} className="uk-link-reset">
              {title}
            </Link>
          </h4>
          <p className="uk-margin-remove uk-text-truncate">
            {content}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Post;
