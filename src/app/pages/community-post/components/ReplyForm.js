import React from 'react';

import { modal } from 'uikit';

const ReplyForm = ({ id }) => {
  const handleReply = e => {
    const data = {
      title: e.target.reply.value,
      content: e.target.content.value
    };

    e.preventDefault();
    if (data.title && data.content) {
      modal('#reply-form-modal').hide();
    }
  };

  return (
    <div id="reply-form-modal" data-uk-modal="center: true">
      <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" data-uk-close />

        <div className="uk-modal-body">
          <h3>Reply to post</h3>
          <form
            className="uk-form-horizontal"
            id="reply-form"
            onSubmit={handleReply}>
            <div className="uk-margin">
              <label htmlFor="reply-title" className="uk-form-label">
                Title
              </label>
              <div className="uk-form-controls">
                <input
                  type="text"
                  className="uk-input"
                  id="reply-title"
                  name="reply"
                  placeholder="Reply Description"
                />
              </div>
            </div>
            <div className="uk-margin">
              <label htmlFor="reply-content" className="uk-form-label">
                Content
              </label>
              <div className="uk-form-controls">
                <textarea
                  id="reply-content"
                  rows="5"
                  className="uk-textarea"
                  name="content"
                  placeholder="Content"
                />
              </div>
            </div>
          </form>

          <div className="uk-text-meta">
            Please make sure to reply properly. Large number of downvotes may
            result your account to be banned.
          </div>
        </div>

        <div className="uk-modal-footer uk-text-right@s uk-text-center">
          <button className="uk-button uk-button-default uk-modal-close">
            Cancel
          </button>
          <button
            className="uk-button uk-button-primary uk-margin-small-left"
            type="submit"
            form="reply-form">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
