import React from 'react';

const NewPost = ({ updateForm, form, addPost }) => {
  const handleFormUpdate = e => {
    updateForm(e.target.name, e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPost(e.target.title.value, e.target.content.value);
  };

  return (
    <div id="newpost" data-uk-modal="center: true">
      <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" data-uk-close />

        <div className="uk-modal-body">
          <h3>Create new post</h3>
          <form
            className="uk-form-horizontal"
            id="newpost-form"
            onSubmit={handleSubmit}>
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
                  value={form.title}
                  onChange={handleFormUpdate}
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
                  value={form.content}
                  onChange={handleFormUpdate}
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
            disabled={!(form.title && form.content)}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
