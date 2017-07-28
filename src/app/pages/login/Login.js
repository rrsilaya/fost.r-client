import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo2-dblue.png';

class Login extends Component {
  handleFormChange = e => {
    this.props.updateForm(e.target.name, e.target.value);
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
            <form className="uk-margin-medium-top">
              <div className="uk-margin">
                <div className="uk-inline uk-width-1-1">
                  <span className="uk-form-icon" data-uk-icon="icon: user" />
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
                  <span className="uk-form-icon" data-uk-icon="icon: lock" />
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

              <div className="uk-margin uk-text-meta uk-text-left">
                Don't have an account?{' '}
                <Link to="/signup" className="uk-text-primary">
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
        </div>
      </DocumentTitle>
    );
  }
}
export default Login;
