import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import FullLoader from '../../components/FullLoader';
import Adopt from './components/Adopt';
import Date from './components/Date';

class PetRequest extends Component {
  componentWillMount() {
    this.props.loadPetData(this.props.match.params.id);
  }

  renderAction = () => {
    const action = this.props.match.params.action;

    if (action === 'adopt') {
      return (
        <Adopt id={this.props.match.params.id} petData={this.props.petData} />
      );
    } else if (action === 'date') {
      return (
        <Date id={this.props.match.params.id} petData={this.props.petData} />
      );
    }
  };

  render() {
    return (
      <DocumentTitle title="fost.r">
        {this.props.isLoading
          ? <FullLoader />
          : this.props.hasFailed
            ? <p>An error occured</p>
            : <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top">
                {this.renderAction()}
              </div>}
      </DocumentTitle>
    );
  }
}

export default PetRequest;
