import React from 'react';
import DocumentTitle from 'react-document-title';

const Adopt = ({ id, petData }) => {
  return (
    <DocumentTitle title="fost.r • Adopt Request">
      <div>
        <h1>Adopt {petData}</h1>
      </div>
    </DocumentTitle>
  );
};

export default Adopt;
