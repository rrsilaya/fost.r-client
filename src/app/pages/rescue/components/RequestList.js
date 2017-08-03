import React from 'react';
import moment from 'moment';

import CenterLoader from '../../../components/CenterLoader';

const RequestList = ({ isLoading, requests, deleteRequest }) => {
  return (
    <div>
      {isLoading
        ? <CenterLoader />
        : <ul className="uk-list uk-list-divider">
            {requests.map((rescue, key) =>
              <li key={key}>
                <div className="uk-grid-small uk-grid-match" data-uk-grid>
                  <div
                    className="uk-width-1-3@m uk-width-1-1 rescue-icon"
                    style={{ backgroundImage: `url(${rescue.rescue_imgurl})` }}
                  />
                  <div className="uk-width-2-3@m uk-width-1-1 uk-inline">
                    <div>
                      <button
                        className="uk-position-top-right uk-padding-small"
                        data-uk-icon="icon: close"
                        onClick={() => deleteRequest(rescue.rescue_uuid)}
                      />
                    </div>
                    <div>
                      <h3 className="uk-margin-remove">
                        {rescue.sender_Username}
                      </h3>
                      <span className="uk-text-meta">
                        {rescue.contactnum_sender} / {rescue.email_sender}
                      </span>

                      <p>{rescue.rescue_body}</p>

                      <span className="uk-text-meta">
                        {moment(rescue.date_submitted).format(
                          'MMMM D, YYYY h:MM A'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>}
    </div>
  );
};

export default RequestList;
