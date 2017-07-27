import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const AddPet = () => {
  return (
    <div id="addpet-modal" data-uk-modal="center: true">
      <div className="uk-modal-dialog">
        <button className="uk-modal-close-default" data-uk-close />
        <div className="uk-modal-body">
          <h3>Add Pet</h3>

          <form className="uk-form-horizontal">
            <div className="uk-margin">
              <label htmlFor="pet-name" className="uk-form-label">Name</label>
              <div className="uk-form-controls">
                <input
                  type="text"
                  className="uk-input"
                  id="pet-name"
                  placeholder="Pet Name"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="pet-kind" className="uk-form-label">Kind</label>
              <div className="uk-form-controls">
                <select id="pet-kind" className="uk-select">
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="pet-breed" className="uk-form-label">Breed</label>
              <div className="uk-form-controls">
                <input
                  type="text"
                  className="uk-input"
                  id="pet-breed"
                  placeholder="Pet Breed"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="pet-sex" className="uk-form-label">Sex</label>
              <div className="uk-form-controls">
                <select id="pet-sex" className="uk-select">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="pet-birthday" className="uk-form-label">
                Birthday
              </label>
              <div className="uk-form-controls">
                <DatePicker
                  className="uk-input uk-width-1-1"
                  placeholderText="Pet Birthday"
                  minDate={moment().add(2, 'days')}
                  maxDate={moment().add(102, 'days')}
                />
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-placeholder uk-text-center">
                <div className="">
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: image"
                  />
                  <span className="uk-text-middle">
                    Drop your images here or by{' '}
                  </span>
                  <div data-uk-form-custom>
                    <input type="file" multiple />
                    <button className="uk-button uk-button-link upload-button">
                      selecting your files
                    </button>.
                  </div>
                </div>

                <div className="uk-text-center uk-hidden">
                  Uploading photos...
                  <progress
                    id="pet-img-upload"
                    className="uk-progress"
                    value="0"
                    max="100"
                  />
                </div>
              </div>
            </div>
          </form>
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
