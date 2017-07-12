import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

import FeaturePanel from '.components/FeaturePanel';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r">
        <div>
          This is home.
          <Link to="/login">Login</Link>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
