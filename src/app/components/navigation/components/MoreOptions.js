import React from 'react';
import { Link } from 'react-router-dom';

const MoreOptions = () => {
  return (
    <div
      className="uk-text-left uk-padding-medium uk-text-small option-panel"
      data-uk-dropdown="mode: click">
      <ul className="uk-nav uk-dropdown-nav more-options">
        <li className="uk-nav-header">More Options</li>
        <li>
          <Link to="/settings">
            <span
              className="uk-margin-small-right"
              data-uk-icon="icon: cog; ratio: 0.75"
            />Account Settings
          </Link>
        </li>
        <li>
          <Link to="/rescue">
            <span
              className="uk-margin-small-right"
              data-uk-icon="icon: lifesaver; ratio: 0.75"
            />Rescue
          </Link>
        </li>
        <li>
          <Link to="/feedback">
            <span
              className="uk-margin-small-right"
              data-uk-icon="icon: forward; ratio: 0.75"
            />Feedback
          </Link>
        </li>
        <li>
          <Link to="/help">
            <span
              className="uk-margin-small-right"
              data-uk-icon="icon: question; ratio: 0.75"
            />Help
          </Link>
        </li>
        <li className="uk-nav-divider" />
        <li>
          <span
            className="uk-margin-small-right"
            data-uk-icon="icon: sign-out; ratio: 0.75"
          />Sign out
        </li>
      </ul>
    </div>
  );
};

export default MoreOptions;
