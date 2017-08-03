import React from 'react';
import DocumentTitle from 'react-document-title';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { modal } from 'uikit';

import CenterLoader from '../../../components/CenterLoader';
import AnonNav from '../../../components/navigation/AnonNav';

const Privacy = () => {
  return (
    <div>
      <h2>Privacy</h2>
      <h4 className="uk-text-center"> Change Password </h4>
      <div className="uk-margin-small-bottom uk-text-center">
        <form className="uk-grid-small uk-text-center">
          <div className="uk-width-1-3@s uk-margin-small-bottom uk-text-center">
            <input
              className="uk-input"
              type="text"
              placeholder="Old Password"
            />
          </div>
          <div className="uk-width-1-3@s uk-margin-small-bottom">
            <input
              className="uk-input"
              type="text"
              placeholder="New Password"
            />
          </div>
          <div className="uk-width-1-3@s uk-margin-small-bottom">
            <input
              className="uk-input"
              type="text"
              placeholder="Retype New Password"
            />
          </div>
        </form>
        <div className="uk-text-center">
          <button className="uk-button uk-button-primary uk-text-center">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
