import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const AddPet = ({ form, updateForm, progress, isLoading, addPet }) => {
  const handleFormUpdate = e => {
    if (e.target.name === 'newPetPhotos') {
      updateForm(e.target.name, Array.from(e.target.files));
    } else {
      updateForm(e.target.name, e.target.value);
    }
  };

  const handleDateChange = date => {
    updateForm('newPetBirthday', date);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const results = e.target;

    addPet({
      name: results.newPetName.value,
      kind: results.newPetKind.value,
      breed: results.newPetBreed.value,
      sex: results.newPetSex.value,
      birthday: moment(form.birthday).format('YYYY-MM-DD'),
      photo: results.newPetPhotos.files[0]
    });
  };

  return (
    <div
      id="addpet-modal"
      data-uk-modal="center: true; bg-close: false; esc-close: false;">
      <div className="uk-modal-dialog">
        <button
          className="uk-modal-close-default"
          data-uk-close
          disabled={isLoading}
        />
        <div className="uk-modal-body">
          <h3>Add Pet</h3>

          <form
            className="uk-form-horizontal"
            id="newPet-form"
            onSubmit={handleFormSubmit}>
            <div className="uk-margin">
              <label htmlFor="pet-name" className="uk-form-label">Name</label>
              <div className="uk-form-controls">
                <input
                  type="text"
                  className="uk-input"
                  id="pet-name"
                  placeholder="Pet Name"
                  name="newPetName"
                  value={form.name}
                  onChange={handleFormUpdate}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="pet-kind" className="uk-form-label">Kind</label>
              <div className="uk-form-controls">
                <select
                  id="pet-kind"
                  className="uk-select"
                  name="newPetKind"
                  value={form.kind}
                  onChange={handleFormUpdate}>
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
                  name="newPetBreed"
                  value={form.breed}
                  onChange={handleFormUpdate}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label htmlFor="pet-sex" className="uk-form-label">Sex</label>
              <div className="uk-form-controls">
                <select
                  id="pet-sex"
                  className="uk-select"
                  name="newPetSex"
                  value={form.sex}
                  onChange={handleFormUpdate}>
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
                  maxDate={moment()}
                  onChange={handleDateChange}
                  value={
                    form.birthday === ''
                      ? ''
                      : moment(form.birthday).format('MMMM D, YYYY')
                  }
                />
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-placeholder uk-text-center">
                <div className={isLoading ? 'uk-hidden' : ''}>
                  {form.photos.length
                    ? <div>
                        <ul className="uk-list uk-list-divider">
                          {form.photos.map((file, key) =>
                            <li key={key}>{file.name}</li>
                          )}
                        </ul>
                      </div>
                    : ''}
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: image"
                  />
                  <div data-uk-form-custom>
                    <input
                      type="file"
                      multiple
                      name="newPetPhotos"
                      onChange={handleFormUpdate}
                      accept="image/gif, image/jpeg, image/jpg, image/png"
                    />
                    <button className="uk-button uk-button-link upload-button">
                      {form.photos.length === 0
                        ? 'Click to select your files'
                        : 'Click to change photos'}
                    </button>.
                  </div>
                </div>

                <div
                  className={`uk-text-center ${isLoading ? '' : 'uk-hidden'}`}>
                  Uploading photos...
                  <progress
                    id="pet-img-upload"
                    className="uk-progress"
                    value={progress}
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
          <button
            className="uk-button uk-button-primary"
            disabled={
              form.name && form.breed && form.birthday && form.photos.length
                ? false
                : true
            }
            form="newPet-form">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
