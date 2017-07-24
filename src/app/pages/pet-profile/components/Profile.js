import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ id, name, gender, location }) => {
  return (
    <div>
      <div className="uk-text-center">
        <h1 className="uk-margin-remove">
          {name}
        </h1>
        <div>
          <span className="uk-label uk-label-default uk-margin-small-right">
            Full-breed
          </span>
          <span className="uk-label uk-label-warning">On-date</span>
        </div>
        <p className="uk-text-meta uk-margin-remove-top uk-margin-small-bottom">
          Edison bulb freegan helvetica unicorn deep v hoodie microdosing
          quinoa. Synth messenger bag
        </p>
        <div className="uk-button-group uk-margin-medium-bottom">
          <Link to={`/feed/${id}/date`} className="uk-button uk-button-default">
            <span
              className="uk-margin-small-right"
              data-uk-icon="icon: heart;"
            />Date
          </Link>
          <Link
            to={`/feed/${id}/adopt`}
            className="uk-button uk-button-default">
            <span
              className="uk-margin-small-right"
              data-uk-icon="icon: happy;"
            />Adopt
          </Link>
        </div>
      </div>

      <ul className="uk-list uk-list-divider">
        <li>
          <span
            className="uk-margin-small-right"
            data-uk-icon="icon: calendar;"
          />January 1, 2017
        </li>
        <li>
          <span className="uk-margin-small-right" data-uk-icon="icon: info;" />
          {gender}
        </li>
        <li>
          <span className="uk-margin-small-right" data-uk-icon="icon: home;" />
          {location}
        </li>
      </ul>
    </div>
  );
};

export default Profile;
