import React from 'react';

import Post from './Post';
import CenterLoader from '../../../components/CenterLoader';

const CommunityFeed = ({
  activeTab,
  handleTabChange,
  changeCategory,
  posts,
  isLoading,
  hasFailed
}) => {
  const tabs = ['Top', 'Featured', 'Unanswered'];

  const changeTab = e => {
    handleTabChange(e.target.name);
    changeCategory(e.target.name);
  };

  const changeSelectTab = e => {
    handleTabChange(e.target.value);
    changeCategory(e.target.value);
  };

  return (
    <div className="uk-margin-medium-top">
      <h2 className="uk-margin-remove">Community Feed</h2>

      <div
        className="uk-background-default"
        data-uk-sticky="offset: 80; media: 800;">
        <ul
          className="uk-flex-center uk-margin-small-top uk-margin-small-bottom uk-visible@s"
          data-uk-tab>
          {tabs.map((link, key) =>
            <li
              className={activeTab === link.toLowerCase() ? 'uk-active' : ''}
              key={key}>
              <a href="#" name={link.toLowerCase()} onClick={changeTab}>
                {link}
              </a>
            </li>
          )}
        </ul>
      </div>

      <select
        className="uk-select uk-hidden@s uk-margin"
        onChange={changeSelectTab}>
        {tabs.map((link, key) =>
          <option key={key} value={link.toLowerCase()}>
            {link}
          </option>
        )}
      </select>

      <div className="uk-margin-small-top">
        {hasFailed
          ? <div className="uk-text-center">An error occured.</div>
          : <div className="uk-inline uk-width-1-1">
              <div>
                <ul className="uk-list uk-list-divider">
                  {posts.map((post, key) =>
                    <Post
                      key={key}
                      id={post._id}
                      content={post.content}
                      votes={5}
                    />
                  )}
                </ul>
                <div className="uk-text-center">
                  <button className="uk-button uk-button-default">
                    Load more
                  </button>
                </div>
              </div>
              {isLoading
                ? [
                    <div className="uk-overlay-default uk-position-cover" />,
                    <div className="uk-overlay uk-position-top uk-padding-large">
                      <CenterLoader />
                    </div>
                  ]
                : ''}
            </div>}
      </div>
    </div>
  );
};

export default CommunityFeed;
