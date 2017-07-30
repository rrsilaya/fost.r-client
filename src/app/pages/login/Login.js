import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo2-dblue.png';
import CenterLoader from '../../components/CenterLoader';

class Login extends Component {
  handleFormChange = e => {
    this.props.updateForm(e.target.name, e.target.value);
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(
      e.target.username.value,
      e.target.password.value,
      e.target.account.value
    );
  };

  render() {
    return (
      <DocumentTitle title="fost.r • Login">
        <div className="login uk-flex uk-flex-middle uk-flex-center">
          <div className="uk-width-1-1 uk-text-center">
            <div>
              <Link to="/">
                <img src={logo} alt="" style={{ height: '160px' }} />
              </Link>
            </div>

            {this.props.loginFail
              ? <div
                  className="uk-alert-danger uk-margin-remove-bottom"
                  data-uk-alert>
                  <button className="uk-alert-close" data-uk-close />
                  Invalid credentials.
                </div>
              : ''}

            <div className="uk-inline uk-width-1-1">
              <div>
                <form
                  className="uk-margin-small-top"
                  onSubmit={this.handleLogin}>
                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        data-uk-icon="icon: user"
                      />
                      <input
                        type="text"
                        name="username"
                        value={this.props.loginForm.username}
                        className="uk-input"
                        placeholder="Username"
                        onChange={this.handleFormChange}
                      />
                    </div>
                  </div>

                  <div className="uk-margin">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        data-uk-icon="icon: lock"
                      />
                      <input
                        type="password"
                        name="password"
                        value={this.props.loginForm.password}
                        className="uk-input"
                        placeholder="Password"
                        onChange={this.handleFormChange}
                      />
                    </div>
                  </div>

                  <div
                    className="uk-margin uk-grid-small uk-child-width-expand"
                    data-uk-grid>
                    <label>
                      <input
                        type="radio"
                        name="account"
                        value="user"
                        className="uk-radio"
                        defaultChecked
                      />
                      <span className="uk-margin-small-right" />User
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="account"
                        value="shelter"
                        className="uk-radio"
                      />
                      <span className="uk-margin-small-right" />Shelter
                    </label>
                  </div>

                  <div className="uk-margin uk-text-meta uk-text-left">
                    Don't have an account?{' '}
                    <Link to="/register" className="uk-text-primary">
                      Create now
                    </Link>.
                  </div>

                  <div className="uk-margin uk-text-center">
                    <button
                      className="uk-button uk-button-primary"
                      disabled={
                        !(
                          this.props.loginForm.username &&
                          this.props.loginForm.password
                        )
                      }>
                      <span
                        className="uk-margin-small-right"
                        data-uk-icon="icon: sign-in"
                      />Login
                    </button>
                  </div>
                </form>
              </div>
              {this.props.isLoggingIn
                ? [
                    <div className="uk-overlay-default uk-position-cover" />,
                    <div className="uk-overlay uk-position-center">
                      <CenterLoader />
                    </div>
                  ]
                : ''}
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
export default Login;
