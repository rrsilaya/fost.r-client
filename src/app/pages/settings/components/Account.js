import React from 'react';
import DocumentTitle from 'react-document-title';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { modal } from 'uikit';

import CenterLoader from '../../../components/CenterLoader';
import AnonNav from '../../../components/navigation/AnonNav';

const Account = ({ formData, changeForm, submitChange }) => {
  const handleFormChange = e => {
    changeForm(e.target.name, e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    submitChange({
      firstname: formData.firstname,
      lastname: formData.lastname,
      Username: formData.Username,
      birthday: formData.birthday,
      address: formData.address
    });
  };

  return (
    <div>
      <h2>Account</h2>
      <div className="uk-inline uk-width-1-1 uk-margin-medium-bottom">
        <form
          className="uk-grid-small"
          data-uk-grid
          onSubmit={handleFormSubmit}>
          <div className="uk-width-1-3@s">
            <input
              className="uk-input"
              type="text"
              name="firstname"
              value={formData.firstname}
              placeholder="First Name"
              onChange={handleFormChange}
            />
          </div>
          <div className="uk-width-1-3@s">
            <input
              className="uk-input"
              type="text"
              name="lastname"
              value={formData.lastname}
              placeholder="Last Name"
              onChange={handleFormChange}
            />
          </div>
          <div className="uk-width-1-3@s">
            <input
              className="uk-input"
              type="text"
              name="Username"
              value={formData.Username}
              placeholder="Username"
              onChange={handleFormChange}
            />
          </div>
          <div className="uk-width-1-2@s uk-form-label">
            <DatePicker
              className="uk-input"
              placeholderText="Birthday"
              id="new-birthday"
              name="birthday"
              showYearDropdown
              showMonthDropdown
              fixedHeight
            />
          </div>
          <div className="uk-width-1-2@s">
            <input
              className="uk-input"
              type="text"
              name="contactnum"
              value={formData.contactnum}
              placeholder="Contact Number"
              onChange={handleFormChange}
            />
          </div>
          <div className="uk-width-1-1@s uk-margin-medium-bottom">
            <input
              className="uk-input"
              type="text"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleFormChange}
            />
          </div>
        </form>
        <div className="uk-text-center uk-margin-medium-bottom">
          <button className="uk-button uk-button-primary uk-text-center">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
