import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <form className="uk-form-stacked uk-margin-large">
          <div className="uk-margin">
            <label htmlFor="kind_of_pet" className="uk-form-label">Pet</label>
            <div className="uk-form-controls">
              <select id="kind_of_pet" className="uk-select">
                <option value="all">All</option>
                {
                  this.props.pets.map((pet, id) => (
                    <option key={id} value={ pet.toLowerCase() }>{ pet }</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className="uk-margin">
            <label htmlFor="pet_breed" className="uk-form-label">Breed</label>
            <div className="uk-form-controls">
              <select id="pet_breed" className="uk-select" disabled>
                <option value="all">All</option>
                <option>Pet Breed</option>
              </select>
            </div>
          </div>

          <div className="uk-margin uk-grid-small" data-uk-grid>
            <div className="uk-width-1-2">
              <label htmlFor="pet_sex" className="uk-form-label">Sex</label>
              <div className="uk-form-controls">
                <select id="pet_sex" className="uk-select">
                  <option value="all">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="uk-width-1-2">
              <label htmlFor="pet_age" className="uk-form-label">Age</label>
              <div className="uk-form-controls">
                <select id="pet_age" className="uk-select">
                  <option value="all">All</option>
                  <option value="< 6m">&lt; 6 months</option>
                  <option value="< 1y">&lt; 1 year</option>
                  <option value="1y">1 year</option>
                  <option value="2y">2 years</option>
                  <option value="3y">3 years</option>
                  <option value=">3y">&gt; 3 years</option>
                </select>
              </div>
            </div>
          </div>

          <div className="uk-margin uk-text-center">
            <button className="uk-button uk-button-primary">Filter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Sidebar;