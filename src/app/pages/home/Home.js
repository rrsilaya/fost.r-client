import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

import FeaturePanel from './components/FeaturePanel';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r">
        <div className="uk-position-right">
          <ul data-uk-tab>
            <li className="uk-active"><a href="#">Sign Up</a></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
