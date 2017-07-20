import React from 'react';
import { Link } from 'react-router-dom';

import Post from './Post';

const CommunityFeed = ({ activeTab }) => {
  const tabs = [
    {
      label: 'Top',
      link: '/community/top'
    },
    {
      label: 'Featured',
      link: '/community/featured'
    },
    {
      label: 'Unanswered',
      link: '/community/unanswered'
    }
  ];

  const handleTabChange = e => {
    window.history.pushState(null, `/community/${e.target.value}`);
  };

  return (
    <div className="uk-margin-medium-top">
      <h2 className="uk-margin-remove">Community Feed</h2>

      <ul
        className="uk-flex-center uk-margin-small-top uk-margin-small-bottom"
        data-uk-tab>
        {tabs.map((link, key) =>
          <li
            className={
              activeTab === link.label.toLowerCase() ? 'uk-active' : ''
            }
            key={key}>
            <Link to={link.link} onClick={handleTabChange}>{link.label}</Link>
          </li>
        )}
      </ul>

      <ul className="uk-list uk-list-divider">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ul>

      <div className="uk-text-center">
        <button className="uk-button uk-button-default">Load more</button>
      </div>
    </div>
  );
};

export default CommunityFeed;
