import React, { Component } from 'react';

import Filters from './Filters';
import HorizontalFormSelect from '../../../components/HorizontalFormSelect';

class Topbar extends Component {
  handleFormChange = e => {
    this.props.filterFeed('kind', e.target.value);
  };

  render() {
    return (
      <div className="uk-section-xsmall uk-container tm-topbar">
        <form className="uk-grid-small uk-flex uk-flex-center" data-uk-grid>
          <div className="uk-grid-match  uk-width-2-3" data-uk-grid>
            <HorizontalFormSelect
              id="top_kind_of_pet"
              label="Kind"
              options={this.props.pets.map((pet, id) =>
                <option key={id} value={pet}>{pet}</option>
              )}
              onChange={this.handleFormChange}
            />
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
