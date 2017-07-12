import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import ErrorPanel from './components/ErrorPanel';

class NoPage extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Not Found">
        <div>
          <ErrorPanel panel={this.props.panel} />
        </div>
      </DocumentTitle>
    );
  }
}

export default NoPage;
