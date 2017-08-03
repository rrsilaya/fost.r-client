import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Profile = ({
  id,
  name,
  gender,
  location,
  breed,
  status,
  description,
  birthday
}) => {
  return (
    <div>
      <div className="uk-text-center">
        <h1 className="uk-margin-remove">
          {name}
        </h1>
        <div>
          <span className="uk-label uk-label-default uk-margin-small-right">
            {breed}
          </span>
          {status === 'DATE'
            ? <span className="uk-label uk-label-warning">On-date</span>
            : ''}
        </div>
        <p className="uk-text-meta uk-margin-remove-top uk-margin-small-bottom">
          {description}
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
          />
          {moment(birthday).format('MMMM D, YYYY')}
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
