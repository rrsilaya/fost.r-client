import React from 'react';
import { Link } from 'react-router-dom';

const ActivePostItem = ({ id, content, votes }) => {
  return (
    <li>
      <Link to={`/community/post/${id}`} className="uk-link-reset">
        <div className="uk-grid-match uk-grid-collapse" data-uk-grid>
          <div className="uk-flex uk-flex-middle uk-margin-right">
            <div
              className={`uk-text-large ${votes > 0
                ? 'uk-text-success'
                : 'uk-text-danger'}`}>
              <span
                data-uk-icon={`icon: ${votes > 0
                  ? 'triangle-up'
                  : 'triangle-down'}`}
              />&nbsp;{Math.abs(votes)}
            </div>
          </div>
          <div className="uk-width-expand uk-text-small uk-flex uk-flex-middle">
            <div>
              <h5 className="uk-text-bold uk-margin-remove">
                lorem ipsum - dolor sit amet
              </h5>
              <p className="uk-margin-remove uk-text-truncate">
                {content}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ActivePostItem;
