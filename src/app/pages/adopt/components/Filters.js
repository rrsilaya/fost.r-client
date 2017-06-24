import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <div id="show-filters" data-uk-modal="center: true; bg-close: false">
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-default" data-uk-close />
          <div className="uk-modal-body">
            <form className="uk-form-horizontal uk-margin-large">
              <div className="uk-margin">
                <label htmlFor="modal_kind" className="uk-form-label">
                  Kind
                </label>
                <div className="uk-form-controls">
                  <select id="kind_of_pet" className="uk-select">
                    <option value="all">All</option>
                    {this.props.pets.map((pet, id) =>
                      <option key={id} value={pet.toLowerCase()}>{pet}</option>
                    )}
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="uk-modal-footer uk-text-center">
            <button className="uk-button uk-button-primary">Filter</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
