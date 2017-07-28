import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import DatePicker from 'react-datepicker';

class Signup extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Sign Up">
        <div className="uk-container uk-container-small uk-margin-auto">
          <h2>Create new account</h2>
          <form className="uk-form-stacked">
            <div
              className="uk-margin uk-grid-small uk-flex uk-flex-bottom uk-child-width-expand@s uk-child-width-1-1"
              data-uk-grid>
              <div>
                <label htmlFor="new-lastname" className="uk-form-label">
                  Basic Information
                </label>
                <div className="uk-form-controls uk-width-1-1 uk-inline">
                  <span className="uk-form-icon" data-uk-icon="icon: user;" />
                  <input
                    type="text"
                    className="uk-input"
                    id="new-firstname"
                    placeholder="Firstname"
                  />
                </div>
              </div>
              <div>
                <div className="uk-form-controls">
                  <input
                    type="text"
                    className="uk-input"
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div>
                <div className="uk-form-controls uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon uk-form-icon-flip"
                    data-uk-spinner="ratio: 0.6"
                  />
                  <input
                    type="text"
                    className="uk-input"
                    placeholder="Username"
                  />
                </div>
              </div>
            </div>

            <div
              className="uk-margin uk-grid-small uk-flex uk-flex-bottom uk-child-width-1-2@s uk-child-width-1-1"
              data-uk-grid>
              <div>
                <label htmlFor="new-birthday" className="uk-form-label">
                  Details About You
                </label>
                <div className="uk-form-controls">
                  <DatePicker
                    className="uk-input"
                    placeholderText="Birthday"
                    id="new-birthday"
                  />
                </div>
              </div>
              <div>
                <div className="uk-form-controls uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: phone" />
                  <input
                    type="text"
                    className="uk-input"
                    placeholder="Contact Number"
                    maxLength="16"
                  />
                </div>
              </div>
              <div className="uk-width-1-1">
                <div className="uk-form-controls uk-inline uk-width-1-1">
                  <span
                    className="uk-form-icon"
                    data-uk-icon="icon: location"
                  />
                  <input
                    type="text"
                    className="uk-input"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>

            <div
              className="uk-margin uk-grid-small uk-flex uk-flex-bottom uk-child-width-1-2@s uk-child-width-1-1"
              data-uk-grid>
              <div>
                <label htmlFor="new-email" className="uk-form-label">
                  Account Credentials
                </label>
                <div className="uk-form-controls uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: mail" />
                  <input
                    type="email"
                    className="uk-input"
                    id="new-email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <div className="uk-form-controls uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: lock" />
                  <input
                    type="password"
                    className="uk-input"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div className="uk-margin-medium-top">
              <label>
                <input type="checkbox" className="uk-checkbox" />
                <span className="uk-margin-small-left" />I have read the terms
                and conditions and hereby agree with all the parts of it.
              </label>
            </div>

            <div className="uk-text-center uk-margin-small-top">
              <button className="uk-button uk-button-primary">
                Create account
              </button>
            </div>
          </form>
        </div>
      </DocumentTitle>
    );
  }
}

export default Signup;
