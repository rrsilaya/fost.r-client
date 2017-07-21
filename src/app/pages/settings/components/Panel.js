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

                <legend className="uk-legend">Legend</legend>

                <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Input" />
                </div>

                <div className="uk-margin">
                  <select className="uk-select">
                    <option>Option 01</option>
                    <option>Option 02</option>
                  </select>
                </div>

                <div className="uk-margin">
                  <textarea
                    className="uk-textarea"
                    rows="5"
                    placeholder="Textarea"
                  />
                </div>

                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                  <label>
                    <input
                      className="uk-radio"
                      type="radio"
                      name="radio2"
                      checked
                    />{' '}
                    A
                  </label>
                  <label>
                    <input className="uk-radio" type="radio" name="radio2" /> B
                  </label>
                </div>

                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                  <label>
                    <input className="uk-checkbox" type="checkbox" checked /> A
                  </label>
                  <label>
                    <input className="uk-checkbox" type="checkbox" /> B
                  </label>
                </div>

                <div className="uk-margin">
                  <input
                    className="uk-range"
                    type="range"
                    value="2"
                    min="0"
                    max="10"
                    step="0.1"
                  />
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
