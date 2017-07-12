import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';

import FullLoader from '../../components/FullLoader';
import ImageSwitcher from './components/ImageSwitcher';

class PetProfile extends Component {
  componentWillMount() {
    this.props.loadProfile(this.props.match.params.id);
  }

  render() {
    return (
      <DocumentTitle
        title={
          'fost.r' + (this.props.data ? ` • ${this.props.data.name}` : '')
        }>
        {this.props.isLoading
          ? <FullLoader />
          : <div className="uk-container uk-container-small uk-margin-medium">
              <ul className="uk-breadcrumb">
                <li><Link to="/feed">Feed</Link></li>
                <li><span>{this.props.data.name}</span></li>
              </ul>

              <ImageSwitcher images={[this.props.data.img]} />
            </div>}
      </DocumentTitle>
    );
  }
}

export default PetProfile;