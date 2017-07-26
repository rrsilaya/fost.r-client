import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Stats from './components/Stats';
import Tabs from './components/Tabs';
import Requests from './components/Requests';
import Pets from './components/Pets';

class Admin extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Admin">
        <div className="uk-container uk-container-small uk-margin-medium-top">
          <Stats />
          <Tabs
            activeTab={this.props.activeTab}
            changeTab={this.props.changeTab}
          />

          <div>
            {this.props.activeTab === 'requests'
              ? <Requests />
              : this.props.activeTab === 'pets' ? <Pets /> : ''}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Admin;
