import React from 'react';

const AddPet = () => {
  return (
    <div id="addpet-modal" data-uk-modal="center: true">
      <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" data-uk-close />
        <div className="uk-modal-body">
          <h3>Add Pet</h3>
          hello
        </div>
        <div className="uk-modal-footer uk-text-right@s uk-text-center">
          <button className="uk-button uk-button-default uk-modal-close uk-margin-small-right">
            Cancel
          </button>
          <button className="uk-button uk-button-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
