import React from 'react';
import DocumentTitle from 'react-document-title';

const Date = ({ id }) => {
  return (
    <DocumentTitle title="fost.r • Date Request">
      <div>
        <h1>Date {id}</h1>
      </div>
    </DocumentTitle>
  );
};

export default Date;
