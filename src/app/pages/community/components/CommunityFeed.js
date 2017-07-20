import React from 'react';

import Post from './Post';

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

      <ul
        className="uk-flex-center uk-margin-small-top uk-margin-small-bottom uk-visible@s"
        data-uk-tab>
        {tabs.map((link, key) =>
          <li
            className={activeTab === link.toLowerCase() ? 'uk-active' : ''}
            key={key}>
            <a href="#" name={link.toLowerCase()} onClick={changeTab}>{link}</a>
          </li>
        )}
      </ul>

      <select
        className="uk-select uk-hidden@s uk-margin"
        onChange={changeSelectTab}>
        {tabs.map((link, key) =>
          <option key={key} value={link.toLowerCase()}>
            {link}
          </option>
        )}
      </select>

      {isLoading
        ? <div className="uk-text-center"><div data-uk-spiner={''} /></div>
        : hasFailed
          ? <div className="uk-text-center">An error occured.</div>
          : <div>
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
            </div>}
    </div>
  );
};

export default CommunityFeed;
