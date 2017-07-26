import React from 'react';
import DocumentTitle from 'react-document-title';

const FullLoader = () => {
  return (
    <DocumentTitle title="fost.r">
      <div className="full-page uk-flex uk-flex-middle uk-flex-center">
        <div className="uk-text-center">
          <div data-uk-spinner={''} /><br />
          <div className="uk-text-meta uk-text-uppercase uk-margin-small-top">
            Loading
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default FullLoader;
