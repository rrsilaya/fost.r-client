import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Item from './components/Item';
import CenterLoader from '../../components/CenterLoader';

class Notifications extends Component {
  componentDidMount() {
    this.props.clearNotif();
    this.props.getNotifications();
  }

  render() {
    return (
      <DocumentTitle title="fost.r • Notifications">
        <div className="uk-container uk-container-small uk-margin-medium-top">
          <h2>Notifications</h2>
          {this.props.isLoading
            ? <div className="uk-text-center"><CenterLoader /></div>
            : this.props.notifications.length === 0
              ? <div className="uk-text-center">
                  Your notifications will appear here.
                </div>
              : <ul className="uk-list uk-list-divider">
                  {this.props.notifications.map((notif, key) =>
                    <li key={key}><Item link="/community" /></li>
                  )}
                </ul>}
        </div>
      </DocumentTitle>
    );
  }
}

export default Notifications;
