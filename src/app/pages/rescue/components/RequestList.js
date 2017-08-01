import React from 'react';

import CenterLoader from '../../../components/CenterLoader';

const RequestList = ({ isLoading, requests }) => {
  return (
    <div>
      {isLoading
        ? <CenterLoader />
        : <ul className="uk-list uk-list-divider">
            {requests.map((rescue, key) =>
              <li key={key}>
                <div className="uk-grid-small uk-grid-match" data-uk-grid>
                  <div
                    className="uk-width-1-4 rescue-icon"
                    style={{ backgroundImage: `url(${rescue.rescue_imgurl})` }}
                  />
                  <div className="uk-width-3-4">
                    hello
                  </div>
                </div>
              </li>
            )}
          </ul>}
    </div>
  );
};

export default RequestList;
