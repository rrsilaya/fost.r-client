import React from 'react';
import UIkit from 'uikit';

const Post = ({ content, author, votes, time, type }) => {
  const handleUpVote = e => {
    e.preventDefault();
    UIkit.notification(`You upvoted this ${type}!`);
  };

  const handleDownVote = e => {
    e.preventDefault();
    UIkit.notification(`You downvoted this ${type}!`);
  };

  const handleFavorite = e => {
    e.preventDefault();
    UIkit.modal
      .confirm('You are about to favorite this comment. Continue?')
      .then(
        () => {
          UIkit.notification('Successfully favorited comment.');
        },
        () => {
          UIkit.notification('Cancelled comment favorite.');
        }
      );
  };

  return (
    <div
      className={`uk-section ${type === 'post'
        ? 'uk-section-muted uk-padding-small uk-margin-medium-bottom'
        : 'uk-padding-remove-vertical uk-margin-small-top uk-margin-small-bottom'}`}>
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
              {type === 'post'
                ? <button
                    className="uk-button uk-button-primary"
                    data-uk-icon="icon: reply"
                    data-uk-toggle="target: #reply-form-modal"
                  />
                : <button
                    className="uk-button uk-button-secondary"
                    data-uk-icon="icon: star"
                    onClick={handleFavorite}
                  />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
