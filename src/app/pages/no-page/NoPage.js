import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class NoPage extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Not Found">
        <div>
          Error 404
        </div>
      </DocumentTitle>
    );
  }
}

export default NoPage;
