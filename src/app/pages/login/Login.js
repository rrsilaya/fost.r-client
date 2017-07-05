import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import LoginPanel from './components/LoginPanel';

class Login extends Component {
  render() {
    return (
      <DocumentTitle title="fost.r • Login">
        <div className="uk-width-medium-1-2 uk-container-center">
          <LoginPanel panel={this.props.panel} />
        </div>
      </DocumentTitle>
    );
  }
}
export default Login;
