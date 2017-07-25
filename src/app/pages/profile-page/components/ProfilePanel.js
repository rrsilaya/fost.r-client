import React, { Component } from 'react';
import samplePicture from './../../../../assets/images/samplePicture.jpg';

class ProfilePanel extends Component {
  render() {
    return (
      <div>
        <form className="uk-form-stacked uk-margin-large">
          <div className="uk-placeholder uk-text-left">
            <img
              className="uk-border-rounded"
              src={samplePicture}
              alt="Profile Picture"
            />
            <dl className="uk-description-list">
              <dt className="uk-text-center">Paula Gomez</dt>
              <dt><span data-uk-icon="icon: home" />Los Baños, Laguna</dt>
              <dt><span data-uk-icon="icon: happy" />32 pets</dt>
              <br />
              <dd>"I like dogs and cats. But I don't like them together. "</dd>
            </dl>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilePanel;
