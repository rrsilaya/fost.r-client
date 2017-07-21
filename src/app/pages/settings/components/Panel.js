import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Panel extends Component {
  render() {
    return (
      <div>
        <ul
          className="uk-tab-right"
          data-uk-tab
          data-uk-switcher="{connect:'#my-id'}">
          <li className="uk-active">
            <a href="#"><span data-uk-icon="icon: user" />Profile</a>
          </li>
          <li><a href="#"><span data-uk-icon="icon: lock" />Privacy</a></li>
          <li>
            <a href="#"><span data-uk-icon="icon: home" />Muted Shelters</a>
          </li>
          <li>
            <a href="#"><span data-uk-icon="icon: push" />Transactions</a>
          </li>
        </ul>

        <ul id="my-id" className="uk-switcher">
          <li>
            <form>
              <fieldset className="uk-fieldset">

                <legend className="uk-legend">Edit Profile</legend>

                <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Name" />
                </div>

                <div className="uk-margin">
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Username"
                  />
                </div>

                <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Email" />
                </div>

                <div className="uk-margin">
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Address"
                  />
                </div>

                <div className="uk-margin">
                  <p>User Type </p>
                  <select className="uk-select">
                    <option>Normal User</option>
                    <option>Shelter</option>
                  </select>
                </div>

                <div className="uk-margin">
                  <textarea
                    className="uk-textarea"
                    rows="3"
                    placeholder="Interests, Bio, ..."
                  />
                </div>
                <div className="uk-text-center">
                  <button className="uk-button uk-button-secondary">
                    Secondary
                  </button>
                </div>
              </fieldset>
            </form>

          </li>
          <li>Content 2</li>
          <li>Content 3</li>
          <li>Content 4</li>
        </ul>
      </div>
    );
  }
}

export default Panel;
