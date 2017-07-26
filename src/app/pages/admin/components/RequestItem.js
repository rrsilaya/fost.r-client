import React from 'react';
import moment from 'moment';

const RequestItem = () => {
  return (
    <div className="uk-grid-small uk-grid-match" data-uk-grid>
      <div className="uk-flex uk-flex-middle">
        <div className="uk-text-center notification-icon">
          <span data-uk-icon="icon: heart; ratio: 1.15" />
          <br />
          <div className="post-meta">
            {moment('Tue Jul 25 2017 22:36:06').fromNow(true)}
          </div>
        </div>
      </div>

      <div
        className="uk-width-expand uk-grid-small uk-flex uk-flex-between uk-flex-middle"
        data-uk-grid>
        <div className="uk-width-2-3@s uk-width-1-1">
          <h5 className="uk-margin-remove">
            Request to adopt <span className="uk-text-bold">Aline</span>
          </h5>
          <p className="uk-padding-remove-vertical uk-margin-remove uk-text-meta">
            John Snow / New York, USA
          </p>
        </div>

        <div className="uk-width-1-3@s uk-width-1-1 uk-flex uk-flex-middle uk-flex-right@s uk-flex-left">
          <div className="uk-button-group">
            <button className="uk-button uk-margin-small-right uk-button-text">
              Approve
            </button>
            <button className="uk-button uk-margin-small-left uk-button-text">
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
