import React from 'react';
import { notification, modal } from 'uikit';
import moment from 'moment';

const Post = ({
  id,
  content,
  title,
  author,
  votes,
  time,
  activeUser,
  type,
  deletePost
}) => {
  const handleUpVote = e => {
    e.preventDefault();
    notification(`You upvoted this ${type}!`);
  };

  const handleDownVote = e => {
    e.preventDefault();
    notification(`You downvoted this ${type}!`);
  };

  const handleFavorite = e => {
    e.preventDefault();
    modal.confirm('You are about to favorite this comment. Continue?').then(
      () => {
        notification('Successfully favorited comment.');
      },
      () => {}
    );
  };

  const handlePostDelete = () => {
    modal
      .confirm('Are you sure you want to delete this post?', { center: true })
      .then(
        () => {
          deletePost(id);
        },
        () => {}
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
            {title}
          </h3>
          <p className="uk-margin-remove">{content}</p>
        </div>
      </div>

      <div
        className="uk-grid uk-grid-match uk-child-width-expand@s uk-child-width-1-1 uk-grid-small"
        data-uk-grid>
        <div className="uk-flex uk-flex-middle">
          <p className="uk-text-left@s uk-text-center uk-text-meta">
            {moment(time).format('MMMM D, YYYY H:MM A')}<br />{author}
          </p>
        </div>
        <div className="uk-flex uk-flex-middle uk-text-right">
          <div>
            {activeUser === author
              ? ''
              : <div className="uk-button-group uk-margin-small-right">
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
                </div>}
            <div className="uk-button-group">
              {type === 'post'
                ? activeUser === author
                  ? <button
                      className="uk-button uk-button-danger"
                      data-uk-icon="icon: trash"
                      onClick={handlePostDelete}
                    />
                  : <button
                      className="uk-button uk-button-primary"
                      data-uk-icon="icon: reply"
                      data-uk-toggle="target: #reply-form-modal"
                    />
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
