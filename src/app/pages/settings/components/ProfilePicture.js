import React from 'react';
import DocumentTitle from 'react-document-title';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { modal } from 'uikit';

import CenterLoader from '../../../components/CenterLoader';
import AnonNav from '../../../components/navigation/AnonNav';

const ProfilePicture = () => {
  return (
    <div>
      <h2>Profile Picture</h2>
      <div className="uk-text-center uk-card uk-card-default uk-card-body uk-width-1-3@m uk-cover-container">
        <img
          className="uk-text-center uk-margin-remove"
          src=""
          alt="Upload Profile Picture"
        />
      </div>
      <div className="uk-text-center uk-margin-medium-bottom">
        <div classname="test-upload" data-uk-form-custom>
          <input type="file" />
          <button
            className="uk-button uk-button-default"
            type="button"
            tabindex="-1">
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
