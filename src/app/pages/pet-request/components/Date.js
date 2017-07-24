import React from 'react';
import DocumentTitle from 'react-document-title';

const Date = ({ id, petData }) => {
  return (
    <DocumentTitle title="fost.r • Date Request">
      <div>
        <h1>Date {petData}</h1>
      </div>
    </DocumentTitle>
  );
};

export default Date;
