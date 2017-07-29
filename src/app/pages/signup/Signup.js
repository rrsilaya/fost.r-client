import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { modal } from 'uikit';

import CenterLoader from '../../components/CenterLoader';
import AnonNav from '../../components/navigation/AnonNav';
import ConfirmPassword from './components/ConfirmPassword';

class Signup extends Component {
  handleFormUpdate = e => {
    this.props.updateForm(
      e.target.name,
      e.target.name === 'checkbox' ? e.target.checked : e.target.value
    );
  };

  handleDateChange = date => {
    this.props.updateForm('birthday', date);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    modal('#confirm-password').hide();

    const form = e.target;
    this.props.register({
      Username: form.usernameNew.value,
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      birthday: form.contact.value,
      address: form.address.value,
      contactnum: form.contact.value,
      email: form.email.value,
      password: form.passwordNew.value
    });
  };

  componentWillMount() {
    this.props.clearCreate();
  }

  componentWillUnmount() {
    this.props.clearCreate();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Sign Up">
        <div>
          <AnonNav />
          <div className="uk-container uk-container-small uk-margin-auto">
            <h2>Create new account</h2>

            <div className="uk-inline uk-width-1-1 uk-margin-medium-bottom">
              <div>
                <form
                  className="uk-form-stacked"
                  id="register"
                  onSubmit={this.handleFormSubmit}>
                  <div
                    className="uk-margin uk-grid-small uk-flex uk-flex-bottom uk-child-width-expand@s uk-child-width-1-1"
                    data-uk-grid>
                    <div>
                      <label htmlFor="new-lastname" className="uk-form-label">
                        Basic Information
                      </label>
                      <div className="uk-form-controls uk-width-1-1 uk-inline">
                        <span
                          className="uk-form-icon"
                          data-uk-icon="icon: user;"
                        />
                        <input
                          type="text"
                          className="uk-input"
                          name="firstname"
                          id="new-firstname"
                          placeholder="Firstname"
                          value={this.props.form.firstname}
                          onChange={this.handleFormUpdate}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="uk-form-controls">
                        <input
                          type="text"
                          className="uk-input"
                          placeholder="Lastname"
                          name="lastname"
                          value={this.props.form.lastname}
                          onChange={this.handleFormUpdate}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="uk-form-controls uk-inline uk-width-1-1">
                        {this.props.isSearchingUser
                          ? <span
                              className="uk-form-icon uk-form-icon-flip"
                              data-uk-spinner="ratio: 0.6"
                            />
                          : this.props.usernameAvailable
                            ? <span
                                className="uk-form-icon uk-form-icon-flip"
                                data-uk-icon="icon: check"
                              />
                            : ''}
                        <input
                          type="text"
                          className={`uk-input ${this.props.usernameExists &&
                            !this.props.isSearchingUser
                            ? 'uk-form-danger'
                            : !this.props.isSearchingUser &&
                                this.props.usernameAvailable
                              ? 'uk-form-success'
                              : ''}`}
                          placeholder="Username"
                          name="usernameNew"
                          value={this.props.form.value}
                          onChange={this.handleFormUpdate}
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
                          name="birthday"
                          showYearDropdown
                          showMonthDropdown
                          fixedHeight
                          onChange={this.handleDateChange}
                          selected={this.props.form.birthday}
                          value={
                            this.props.form.birthday === ''
                              ? ''
                              : moment(this.props.form.birthday).format(
                                  'MMMM D, YYYY'
                                )
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <div className="uk-form-controls uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          data-uk-icon="icon: phone"
                        />
                        <input
                          type="text"
                          className="uk-input"
                          placeholder="Contact Number"
                          maxLength="16"
                          name="contact"
                          onChange={this.handleFormUpdate}
                          value={this.props.form.contact}
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
                          name="address"
                          onChange={this.handleFormUpdate}
                          value={this.props.form.address}
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
                        <span
                          className="uk-form-icon"
                          data-uk-icon="icon: mail"
                        />
                        <input
                          type="email"
                          className="uk-input"
                          id="new-email"
                          placeholder="Email"
                          name="email"
                          onChange={this.handleFormUpdate}
                          value={this.props.form.email}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="uk-form-controls uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          data-uk-icon="icon: lock"
                        />
                        <input
                          type="password"
                          className="uk-input"
                          placeholder="Password"
                          name="passwordNew"
                          onChange={this.handleFormUpdate}
                          value={this.props.form.password}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="uk-margin-medium-top">
                    <label>
                      <input
                        type="checkbox"
                        className="uk-checkbox"
                        name="checkbox"
                        onChange={this.handleFormUpdate}
                        checked={this.props.form.checkbox}
                      />
                      <span className="uk-margin-small-left" />I have read the
                      terms
                      and conditions and hereby agree with all the parts of it.
                    </label>
                  </div>

                  <div className="uk-text-center uk-margin-small-top">
                    <button
                      className="uk-button uk-button-primary"
                      disabled={
                        Object.values(this.props.form).filter(
                          input => input === '' || input === false
                        ).length > 1
                      }
                      data-uk-toggle="target: #confirm-password">
                      Create account
                    </button>
                  </div>
                </form>
              </div>

              {this.props.isCreatingUser || this.props.createdUser
                ? <div className="uk-overlay-default uk-position-cover" />
                : ''}
              <div className="uk-overlay uk-position-center uk-dark">
                {this.props.isCreatingUser
                  ? <CenterLoader />
                  : this.props.createdUser
                    ? <p className="uk-text-center">
                        Your account has been created. Login{' '}
                        <Link to="/login">here</Link>.
                      </p>
                    : ''}
              </div>
            </div>
          </div>
          <ConfirmPassword
            status={this.props.form.password === this.props.form.prompt}
            handleFormUpdate={this.handleFormUpdate}
          />
        </div>
      </DocumentTitle>
    );
  }
}

export default Signup;
