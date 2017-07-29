import React from 'react';

const NewPost = () => {
  return (
    <div id="newpost" data-uk-modal="center: true">
      <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" data-uk-close />

        <div className="uk-modal-body">
          <h3>Create new post</h3>
          <form className="uk-form-horizontal" id="newpost-form">
            <div className="uk-margin">
              <label htmlFor="newpost-title" className="uk-form-label">
                Title
              </label>
              <div className="uk-form-controls">
                <input
                  type="text"
                  className="uk-input"
                  id="newpost-title"
                  name="title"
                  placeholder="Post Title"
                />
              </div>
            </div>
            <div className="uk-margin">
              <label htmlFor="newpost-content" className="uk-form-label">
                Content
              </label>
              <div className="uk-form-controls">
                <textarea
                  id="newpost-content"
                  rows="5"
                  className="uk-textarea"
                  name="content"
                  placeholder="Content"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="uk-modal-footer uk-text-right@s uk-text-center">
          <button className="uk-button uk-button-default uk-modal-close">
            Cancel
          </button>
          <button
            className="uk-button uk-button-primary uk-margin-small-left"
            type="submit"
            form="newpost-form"
            disabled={true}>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
