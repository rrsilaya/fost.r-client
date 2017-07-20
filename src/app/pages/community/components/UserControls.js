import React from 'react';

import ActivePostItem from './ActivePostItem';

const UserControls = () => {
  return (
    <div className="uk-section uk-padding-large community-user-controls uk-section-muted">
      <h4>Your Active Posts</h4>
      <ul className="uk-list uk-list-divider">
        <ActivePostItem />
        <ActivePostItem />
        <ActivePostItem />
        <li className="uk-text-center">
          <div className="uk-button-group">
            <button className="uk-button uk-button-default">View all</button>
            <button className="uk-button uk-button-primary">New post</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserControls;
