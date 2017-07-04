import React, { Component } from 'react';

class LoginPanel extends Component {
  render() {
    return (
      //
      <div className="">
        <div className="uk-flex uk-flex-center uk-flex-middle">
          <div className="uk-card uk-card-default uk-width-1-3@m">
            <div className="uk-card-header">
              <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                  <img
                    className="uk-border-circle"
                    width="40"
                    height="40"
                    src="https:static.pexels.com/photos/7720/night-animal-dog-pet.jpg"
                  />
                </div>
                <div className="uk-width-expand">
                  <h3 className="uk-card-title uk-margin-remove-bottom">
                    Sign In
                  </h3>
                  <p className="uk-text-meta uk-margin-remove-top">
                    "tagline...whenever, wherever."
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-card-body">

              <form>
                <div className="uk-margin">
                  <div className="uk-inline">
                    <span className="uk-form-icon" data-uk-icon="icon: user" />
                    <input className="uk-input" type="text" />
                  </div>
                </div>

                <div className="uk-margin">
                  <div className="uk-inline">
                    <span
                      className="uk-form-icon uk-form-icon-flip"
                      data-uk-icon="icon: lock"
                    />
                    <input className="uk-input" type="text" />
                  </div>
                </div>
                <div
                  className="uk-margin uk-grid-small uk-child-width-auto"
                  data-uk-grid
                >
                  <label>
                    <input className="uk-checkbox" type="checkbox" checked />{' '}
                    Stay signed in
                  </label>
                </div>
                <button className="uk-button uk-button-primary">
                  Log In
                </button>

              </form>

            </div>
            <div className="uk-card-footer">
              <a href="#" className="uk-button uk-button-text">
                No account? Create one.
              </a>
            </div>
          </div>

        </div>
      </div>
      //
    );
  }
}

export default LoginPanel;
