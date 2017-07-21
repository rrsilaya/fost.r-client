import React from 'react';
import UIkit from 'uikit';

const MainPost = ({ content, author, votes, time }) => {
  const handleUpVote = e => {
    e.preventDefault();
    UIkit.notification('You upvoted this post!');
  };

  const handleDownVote = e => {
    e.preventDefault();
    UIkit.notification('You downvoted this post!');
  };

  return (
    <div className="uk-section uk-section-muted uk-padding-small uk-margin-medium-bottom">
      <div className="uk-grid uk-grid-match uk-grid-small" data-uk-grid>
        <div className="uk-margin-small-top">
          <div
            className={`uk-text-large ${votes > 0
              ? 'uk-text-success'
              : votes === 0 ? 'uk-text-warning' : 'uk-text-danger'}`}>
            <span
              data-uk-icon={`icon: ${votes > 0
                ? 'triangle-up'
                : votes === 0 ? 'triangle-right' : 'triangle-down'}`}
            />&nbsp;{Math.abs(votes)}
          </div>
        </div>

        <div className="uk-width-expand">
          <h3 className="uk-margin-small-bottom">
            {content.split(' ').reverse().splice(0, 5).join(' ')}
          </h3>
          <p className="uk-margin-remove">{content} {content}</p>
        </div>
      </div>

      <div
        className="uk-grid uk-grid-match uk-child-width-expand@s uk-child-width-1-1 uk-grid-small"
        data-uk-grid>
        <div className="uk-flex uk-flex-middle">
          <p className="uk-text-left@s uk-text-center uk-text-meta">
            {time.split(' ').splice(0, 5).join(' ')}<br />{author}
          </p>
        </div>
        <div className="uk-flex uk-flex-middle uk-text-right">
          <div>
            <div className="uk-button-group uk-margin-small-right">
              <button
                className="uk-button uk-button-default"
                data-uk-icon="icon: arrow-up"
                onClick={handleUpVote}
              />
              <button
                className="uk-button uk-button-default"
                data-uk-icon="icon: arrow-down"
                onClick={handleDownVote}
              />
            </div>
            <div className="uk-button-group">
              <button
                className="uk-button uk-button-primary"
                data-uk-icon="icon: reply"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPost;
