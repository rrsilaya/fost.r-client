import React, { Component } from 'react';
import HorizontalFormSelect from '../../../components/HorizontalFormSelect';

class Filters extends Component {
  render() {
    return (
      <div
        id="show-filters"
        className="uk-hidden@m"
        data-uk-modal="center: true; bg-close: false">
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-default" data-uk-close />
          <div className="uk-modal-body">
            <h2 className="uk-modal-title">Filters</h2>
            <form className="uk-margin-large">
              <div className="uk-margin">
                <HorizontalFormSelect
                  id="modal_kind"
                  label="Kind"
                  options={this.props.pets.map((pet, id) =>
                    <option key={id} value={pet.toLowerCase()}>{pet}</option>
                  )}
                />
              </div>
              <div className="uk-margin">
                <HorizontalFormSelect
                  id="modal_breed"
                  label="Breed"
                  disabled={true}
                  options={<option>Pet Breed</option>}
                />
              </div>
              <div className="uk-margin">
                <HorizontalFormSelect
                  id="modal_sex"
                  label="Sex"
                  option={[
                    <option value="male">Male</option>,
                    <option value="female">Female</option>
                  ]}
                />
              </div>

              <div className="uk-margin">
                <HorizontalFormSelect
                  id="modal_age"
                  label="Age"
                  option={
                    <div>
                      <option value="< 6m">&lt; 6 months</option>
                      <option value="< 1y">&lt; 1 year</option>
                      <option value="1y">1 year</option>
                      <option value="2y">2 years</option>
                      <option value="3y">3 years</option>
                      <option value=">3y">&gt; 3 years</option>
                    </div>
                  }
                />
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
