import React from 'react';
import { Link } from 'react-router-dom';

const QuickPreview = ({ id, img, name, location, gender }) => {
  return (
    <div id={`${id}`} data-uk-modal="center: true;">
      <div className="uk-modal-dialog uk-modal-body uk-padding-remove">
        <button className="uk-modal-close-default" data-uk-close />

        <div
          className="uk-grid uk-child-width-1-2@s uk-grid-collapse"
          data-uk-grid>
          <div className="feed-modal">
            <img src={img} />
          </div>
          <div className="uk-flex uk-flex-middle uk-padding-small uk-text-small">
            <div>
              <h2 className="uk-margin-remove">{name}</h2>
              <div className="uk-margin-small-bottom">
                <span className="uk-label uk-label-default uk-margin-small-right">
                  Full-breed
                </span>
                <span className="uk-label uk-label-warning">On-date</span>
              </div>
              <p className="uk-margin-remove">
                Edison bulb freegan helvetica unicorn deep v hoodie microdosing
                quinoa. Synth messenger bag
              </p>

              <ul className="uk-list uk-list-divider">
                <li>
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: calendar; ratio: 0.7"
                  />January 1, 2017
                </li>
                <li>
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: info; ratio: 0.7"
                  />
                  {gender}
                </li>
                <li>
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: home; ratio: 0.7"
                  />
                  {location}
                </li>
              </ul>

              <div className="uk-text-center uk-margin-small-top">
                <Link
                  to={`/feed/${name.toLowerCase()}`}
                  className="uk-button uk-button-default"
                  data-uk-toggle={`target: #${id}`}>
                  View{' '}
                  <span
                    className="uk-margin-small-left"
                    data-uk-icon="icon: arrow-right"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPreview;
