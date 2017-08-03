import React from 'react';

const RescueForm = ({ updateForm, form, isSending, progress, sendRescue }) => {
  const handleFormUpdate = e => {
    const value = e.target.name === 'rescueChecked'
      ? e.target.checked
      : e.target.value;

    updateForm(
      e.target.name.substr(6, e.target.name.length).toLowerCase(),
      value
    );
  };

  const handleFileSelect = e => {
    updateForm('files', Array.from(e.target.files));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const res = e.target;

    sendRescue({
      rescue_body: res.rescueContent.value,
      photo: res.rescuePhoto.files[0]
    });
  };

  return (
    <div>
      <p>Report pets who needs to be rescued.</p>

      <div className="uk-inline uk-width-1-1">
        <div>
          <form className="uk-form-stacked" onSubmit={handleFormSubmit}>
            <div className="uk-margin">
              <label htmlFor="rescueContent" className="uk-form-label">
                Rescue Request
              </label>
              <div className="uk-form-controls">
                <textarea
                  name="rescueContent"
                  id="rescueContent"
                  rows="8"
                  className="uk-textarea"
                  value={form.content}
                  onChange={handleFormUpdate}
                />
              </div>
            </div>

            <div className="uk-margin uk-placeholder uk-text-center">
              <span
                data-uk-icon="icon: image"
                className="uk-margin-small-right"
              />
              {form.files.length !== 0
                ? <span className="uk-text-truncate">
                    {form.files[0].name}{' '}
                  </span>
                : ''}
              <div data-uk-form-custom>
                <input
                  type="file"
                  name="rescuePhoto"
                  accept="image/gif, image/jpeg, image/jpg, image/png"
                  onChange={handleFileSelect}
                />
                <button className="uk-button uk-button-link upload-button">
                  {form.files.length === 0
                    ? 'Click here select file to upload.'
                    : 'Change'}
                </button>
              </div>
            </div>

            <div className="uk-margin">
              <label>
                <input
                  type="checkbox"
                  name="rescueChecked"
                  className="uk-checkbox uk-margin-small-right"
                  checked={form.checked}
                  onChange={handleFormUpdate}
                />I certify that this rescue tip request is legitimate.
              </label>
            </div>

            <div className="uk-margin uk-text-center">
              <button
                className="uk-button uk-button-primary"
                disabled={form.content === '' || !form.checked}>
                Submit
              </button>
            </div>
          </form>
        </div>
        {isSending
          ? [
              <div className="uk-overlay-default uk-position-cover" />,
              <div className="uk-overlay uk-position-center uk-width-1-1">
                <progress className="uk-progress" value={progress} max="100" />
              </div>
            ]
          : ''}
      </div>
    </div>
  );
};

export default RescueForm;
