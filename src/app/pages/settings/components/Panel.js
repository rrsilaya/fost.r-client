import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Panel extends Component {
  render() {
    return (
      <div className="">
        <ul data-uk-accordion>
          <li>
            <button className="uk-text-left uk-accordion-title uk-button uk-button-secondary uk-width-1-1">
              {' '}<span
                className="uk-margin-small-right"
                data-uk-icon="icon: user"
              />{' '}
              <b>Profile </b>{' '}
            </button>
            <div className="uk-accordion-content">
              <form>
                <fieldset className="uk-fieldset">
                  <div className="uk-margin-bottom">
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Username"
                    />
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Password"
                    />
                  </div>

                  <div className="uk-margin-bottom">
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Contact Number"
                    />
                  </div>

                  <div className="uk-margin">
                    <select className="uk-select">
                      <option>Normal User</option>
                      <option>Shelter</option>
                    </select>
                  </div>

                  <div className="uk-margin">
                    <textarea
                      className="uk-textarea"
                      rows="3"
                      placeholder="Bio, Interests,.."
                    />
                  </div>
                  <p data-uk-margin>
                    <button className="uk-button uk-button-secondary uk-text-center">
                      Save Changes
                    </button>
                  </p>
                </fieldset>
              </form>
            </div>
          </li>
          <li>
            <button className="uk-text-left uk-accordion-title uk-button uk-button-secondary uk-width-1-1">
              {' '}<span
                className="uk-margin-small-right"
                data-uk-icon="icon: minus"
              />{' '}
              <b> Muted Shelters </b>{' '}
            </button>
            <div className="uk-accordion-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </li>
          <li>
            <button className="uk-text-left uk-accordion-title uk-button uk-button-secondary uk-width-1-1">
              Item 1
            </button>
            <div className="uk-accordion-content">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat proident.
              </p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Panel;
