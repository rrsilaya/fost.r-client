import React from 'react';

import RequestItem from './RequestItem';

const Requests = () => {
  return (
    <ul className="uk-list uk-list-divider">
      <li><RequestItem /></li>
      <li><RequestItem /></li>
      <li><RequestItem /></li>
    </ul>
  );
};

export default Requests;
