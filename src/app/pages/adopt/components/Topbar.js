import React, { Component } from 'react';

import Filters from './Filters';

class Topbar extends Component {
  render() {
    return (
      <div className="uk-section-xsmall uk-container tm-topbar">
        <form className="uk-grid-small uk-flex uk-flex-center" data-uk-grid>
          <div className="uk-grid-match  uk-width-2-3" data-uk-grid>
            <div className="uk-flex uk-flex-middle uk-width-1-4">
              <label htmlFor="top_kind_of_pet" className="uk-form-label">
                Kind
              </label>
            </div>
            <div className="uk-form-controls uk-width-3-4">
              <select id="top_kind_of_pet" className="uk-select">
                <option value="all">All</option>
                {this.props.pets.map((pet, id) =>
                  <option key={id} value={pet.toLowerCase()}>{pet}</option>
                )}
              </select>
            </div>
          </div>

          <div className="uk-width-1-3">
            <button
              className="uk-button uk-button-default uk-width-1-1 uk-visible@s"
              data-uk-toggle="target: #show-filters">
              Filters
            </button>
            <button
              className="uk-button uk-button-default uk-width-1-1 uk-hidden@s"
              data-uk-icon="icon: plus"
              data-uk-toggle="target: #show-filters"
            />
          </div>
        </form>

        <Filters pets={this.props.pets} />
      </div>
    );
  }
}

export default Topbar;
