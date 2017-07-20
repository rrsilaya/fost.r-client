import React, { Component } from 'react';

class NotificationPanel extends Component {
  render() {
    return (
      <div
        className="uk-text-left uk-padding-medium uk-width-medium uk-text-small notif-panel"
        data-uk-dropdown="mode: click">
        <ul className="uk-list uk-list-divider uk-margin-remove">
          <span className="uk-text-small uk-text-uppercase">Notifications</span>
          <li className="uk-grid uk-grid-match uk-grid-collapse" data-uk-grid>
            <div className="uk-flex uk-flex-middle">
              <span
                className="uk-margin-small-right"
                data-uk-icon="commenting"
              />
            </div>
            <div className="uk-width-expand">
              Your thread received new comments.
            </div>
          </li>
          <li className="uk-grid uk-grid-match uk-grid-collapse" data-uk-grid>
            <div className="uk-flex uk-flex-middle">
              <span className="uk-margin-small-right" data-uk-icon="heart" />
            </div>
            <div className="uk-width-expand">
              Your request to adopt has been approved!
            </div>
          </li>
          <li className="uk-grid uk-grid-match uk-grid-collapse" data-uk-grid>
            <div className="uk-flex uk-flex-middle">
              <span className="uk-margin-small-right" data-uk-icon="home" />
            </div>
            <div className="uk-width-expand">
              Your request to date has been approved!
            </div>
          </li>

          <li className="uk-text-center uk-text-uppercase">
            See All Notifications
          </li>
        </ul>
      </div>
    );
  }
}

export default NotificationPanel;
