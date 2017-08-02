import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import ProfilePanel from './components/ProfilePanel';
import FeedPanel from './components/FeedPanel';

class Profile extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r">
        <div>
          <div className="uk-section tm-sidebar-left uk-visible@m">
            <ProfilePanel />
          </div>
          <div>
            <FeedPanel />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Profile;
