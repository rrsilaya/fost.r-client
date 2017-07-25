import React from 'react';
import moment from 'moment';

const Item = () => {
  return (
    <div className="uk-grid-small uk-grid-match" data-uk-grid>
      <div className="uk-flex uk-flex-middle">
        <div className="uk-text-center notification-icon">
          <span data-uk-icon="icon: star; ratio: 1.25" />
          <br />
          <div className="post-meta">
            {moment('Tue Jul 25 2017 22:36:06').fromNow(true)}
          </div>
        </div>
      </div>
      <div className="uk-width-expand uk-flex uk-flex-middle">
        <div>
          <h5 className="uk-margin-remove">New Reply in Post</h5>
          <p className="uk-padding-remove-vertical uk-margin-remove">
            Your post received new replies!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
