import React from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';

const Adopt = ({ id, petData }) => {
  return (
    <DocumentTitle title="fost.r • Adopt Request">
      <div>
        <ul className="uk-breadcrumb">
          <li><Link to="/feed">Feed</Link></li>
          <li><Link to={`/feed/${id}`}>{petData}</Link></li>
          <li><span>Adopt</span></li>
        </ul>

        <h1>Adopt {petData}</h1>
      </div>
    </DocumentTitle>
  );
};

export default Adopt;
