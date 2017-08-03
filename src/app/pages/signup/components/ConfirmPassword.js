import React from 'react';

const ConfirmPassword = ({ status, handleFormUpdate }) => {
  return (
    <div
      id="confirm-password"
      data-uk-modal="center: true; esc-close: false; bg-close: false;">
      <div className="uk-modal-dialog uk-modal-body uk-text-center">
        <button className="uk-modal-close-default" data-uk-close />
        <div className="uk-margin">
          <input
            type="password"
            className="uk-input uk-text-center"
            name="prompt"
            placeholder="Re-type your password"
            onChange={handleFormUpdate}
          />
        </div>
        <div className="uk-margin">
          <button
            className="uk-button uk-button-primary"
            form="register"
            type="submit"
            disabled={!status}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;
