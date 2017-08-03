import React from 'react';
import DocumentTitle from 'react-document-title';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { modal } from 'uikit';

import CenterLoader from '../../../components/CenterLoader';
import AnonNav from '../../../components/navigation/AnonNav';

const Account = () => {
  return (
    <div>
      <h2>Account</h2>
      <div className="uk-inline uk-width-1-1 uk-margin-medium-bottom">
        <form className="uk-grid-small" data-uk-grid>
          <div className="uk-width-1-3@s">
            <input className="uk-input" type="text" placeholder="First Name" />
          </div>
          <div className="uk-width-1-3@s">
            <input className="uk-input" type="text" placeholder="Last Name" />
          </div>
          <div className="uk-width-1-3@s">
            <input className="uk-input" type="text" placeholder="Username" />
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
              placeholder="Contact Number"
            />
          </div>
          <div className="uk-width-1-1@s uk-margin-medium-bottom">
            <input className="uk-input" type="text" placeholder="Address" />
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
