import React from 'react';

const ReplyForm = ({ id, updateForm, replyForm, replyToPost }) => {
  const handleReply = e => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      content: e.target.content.value
    };

    replyToPost(id, data.title, data.content);
    e.target.reset();
  };

  const handleFormUpdate = e => {
    updateForm(e.target.name, e.target.value);
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
                  name="title"
                  placeholder="Reply Description"
                  value={replyForm.title}
                  onChange={handleFormUpdate}
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
                  value={replyForm.content}
                  onChange={handleFormUpdate}
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
            form="reply-form"
            disabled={
              replyForm.title.length === 0 || replyForm.content.length === 0
            }>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyForm;
