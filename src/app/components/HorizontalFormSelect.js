import React, { Component } from 'react';

class HorizontalFormSelect extends Component {
  render() {
    return (
      <div className="uk-width-1-1 uk-grid-collapse" data-uk-grid>
        <div className="uk-flex uk-flex-middle uk-width-1-4">
          <label htmlFor={this.props.id} className="uk-form-label">
            {this.props.label}
          </label>
        </div>

        <div className="uk-form-controls uk-width-3-4">
          <select
            id={this.props.id}
            className="uk-select"
            disabled={this.props.disabled}>
            <option value="all">All</option>
            {this.props.options}
          </select>
        </div>
      </div>
    );
  }
}

export default HorizontalFormSelect;
