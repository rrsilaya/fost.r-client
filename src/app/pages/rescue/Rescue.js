import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import RescueForm from './components/RescueForm';
import RequestList from './components/RequestList';

class Rescue extends Component {
  componentDidMount() {
    if (this.props.accountType === 'shelter') this.props.loadRequests();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Rescue">
        <div className="uk-container uk-container-small uk-margin-auto uk-margin-medium-top">
          <h2>Rescue</h2>

          {this.props.accountType === 'user'
            ? <RescueForm
                updateForm={this.props.updateForm}
                form={this.props.form}
                isSending={this.props.isSending}
                progress={this.props.progress}
                sendRescue={this.props.sendRescue}
              />
            : <RequestList
                isLoading={this.props.isGettingRequests}
                requests={this.props.requests}
                deleteRequest={this.props.deleteRequest}
              />}
        </div>
      </DocumentTitle>
    );
  }
}

export default Rescue;
