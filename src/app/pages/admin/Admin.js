import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { upload } from 'uikit';

import Stats from './components/Stats';
import Tabs from './components/Tabs';
import Requests from './components/Requests';
import Pets from './components/Pets';

import CenterLoader from '../../components/CenterLoader';

class Admin extends Component {
  componentDidMount() {
    this.props.getInfo();
    this.props.getPets();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Admin">
        <div className="uk-container uk-container-small uk-margin-medium-top">
          <Stats
            isLoading={this.props.isGettingInfo}
            hasFailed={this.props.isGettingInfoFailed}
            shelterInfo={this.props.shelterInfo}
          />
          <Tabs
            activeTab={this.props.activeTab}
            changeTab={this.props.changeTab}
            getPets={this.props.getPets}
          />

          <div className="uk-inline uk-width-1-1">
            <div>
              {this.props.activeTab === 'requests'
                ? <Requests />
                : this.props.activeTab === 'pets'
                  ? <Pets
                      pets={this.props.pets}
                      addForm={this.props.addForm}
                      updateForm={this.props.updateForm}
                      uploadState={this.props.uploadState}
                      isAddingPet={this.props.isAddingPet}
                      addPet={this.props.addPet}
                      deletePet={this.props.deletePet}
                    />
                  : ''}
            </div>
            {this.props.isLoading
              ? [
                  <div className="uk-overlay-default uk-position-cover" />,
                  <div className="uk-overlay uk-position-top">
                    <CenterLoader />
                  </div>
                ]
              : ''}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Admin;
