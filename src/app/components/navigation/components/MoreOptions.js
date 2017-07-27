import React from 'react';
import { Link } from 'react-router-dom';

import options from './option-links';

const MoreOptions = ({ logout }) => {
  return (
    <div
      className="uk-text-left uk-padding-medium option-panel"
      data-uk-dropdown="mode: click">
      <ul className="uk-nav uk-dropdown-nav more-options">
        <li className="uk-nav-header">More Options</li>
        {options.map((link, key) =>
          <li key={key}>
            <Link to={link.route}>
              <span
                className="uk-margin-small-right"
                data-uk-icon={`icon: ${link.icon}; ratio: 0.75`}
              />
              {link.label}
            </Link>
          </li>
        )}

        <li className="uk-nav-divider" />
        <li>
          <button className="uk-button uk-icon" onClick={logout}>
            <span
              className="uk-margin-small-right"
              data-uk-icon="icon: sign-out; ratio: 0.75"
            />Sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MoreOptions;
