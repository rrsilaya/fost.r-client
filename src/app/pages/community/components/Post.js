import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <li>
      <div className="uk-grid-medium uk-grid-match" data-uk-grid>
        <div
          className="uk-text-center uk-grid-small uk-child-width-expand uk-flex uk-flex-middle"
          data-uk-grid>
          <div className="post-meta-tags">
            <span className="uk-text-large">3</span><br />
            <span className="post-meta">votes</span>
          </div>
          <div className="post-meta-tags">
            <span className="uk-text-large">5</span><br />
            <span className="post-meta">answers</span>
          </div>
        </div>

        <div className="uk-width-expand uk-flex uk-flex-middle">
          <h4 className="uk-text-primary uk-margin-remove">
            <Link to="/community/post" className="uk-link-reset">
              lorem ipsum - dolor sit amet
            </Link>
          </h4>
          <p className="uk-margin-remove uk-text-truncate">
            How to time delay submit button with JQuery in Wordpress Avada
            Theme? How to time delay submit button with JQuery in Wordpress
            Avada Theme? How to time delay submit button with JQuery in
            Wordpress Avada Theme?
          </p>
        </div>
      </div>
    </li>
  );
};

export default Post;
