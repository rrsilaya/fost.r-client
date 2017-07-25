import React from 'react';
import { Link } from 'react-router-dom';

const Adopt = ({ id, name, house }) => {
  return (
    <div>
      <h2 className="uk-heading-line uk-text-center">
        <span>Request for Adoption</span>
      </h2>

      <p>
        You are about to adopt <span className="uk-text-bold">{name}</span>.
        Please confirm that you have read the terms and conditions before
        continuing to adopt.
      </p>
      <p>
        <span className="uk-text-bold">{house}</span> will contact you via
        email. Allow maximum of 48 hours to process your request.
      </p>

      <div className="uk-text-right@s uk-text-center uk-child-width-auto@s uk-child-width-1-2">
        <Link
          to={`/feed/${id}/profile`}
          className="uk-button uk-button-default">
          Cancel
        </Link>
        <button className="uk-button uk-button-primary">Proceed</button>
      </div>
    </div>
  );
};

export default Adopt;
