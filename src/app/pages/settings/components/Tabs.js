import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import links from './routes';

const Tabs = withRouter(({ history }) => {
  return (
    <ul className="uk-tab-left" data-uk-tab>
      {links.map((tab, key) =>
        <li
          key={key}
          className={window.location.pathname === tab.route ? 'uk-active' : ''}
          onClick={() => history.push(tab.route)}>
          <Link to={tab.route}>
            <span
              className="uk-margin-small-right"
              data-uk-icon={`icon: ${tab.icon}`}
            />
            {tab.label}
          </Link>
        </li>
      )}
    </ul>
  );
});

export default Tabs;
