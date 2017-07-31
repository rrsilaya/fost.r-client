import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import RescueForm from './components/RescueForm';

class Rescue extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Rescue">
        <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top">
          <h2>Rescue</h2>

          <RescueForm
            updateForm={this.props.updateForm}
            form={this.props.form}
          />
        </div>
      </DocumentTitle>
    );
  }
}

export default Rescue;
