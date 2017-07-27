import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Item from './components/Item';

class Notifications extends Component {
  componentDidMount() {
    this.props.clearNotif();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Notifications">
        <div className="uk-container uk-container-small uk-margin-medium-top">
          <h2>Notifications</h2>
          <ul className="uk-list uk-list-divider">
            <li><Item link="/community" /></li>
            <li><Item link="/community" /></li>
            <li><Item link="/community" /></li>
          </ul>

          <div className="uk-text-center">
            <button className="uk-button uk-button-default">Load more</button>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Notifications;
