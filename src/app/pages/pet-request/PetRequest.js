import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import FullLoader from '../../components/FullLoader';
import Adopt from './components/Adopt';
import Date from './components/Date';

class PetRequest extends Component {
  renderAction = () => {
    const action = this.props.match.params.action;

    if (action === 'adopt') {
      return <Adopt id={this.props.match.params.id} />;
    } else if (action === 'date') {
      return <Date id={this.props.match.params.id} />;
    }
  };

  render() {
    return (
      <DocumentTitle title="fost.r">
        {this.props.isLoading ? <FullLoader /> : this.renderAction()}
      </DocumentTitle>
    );
  }
}

export default PetRequest;
