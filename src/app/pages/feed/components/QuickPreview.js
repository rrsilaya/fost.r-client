import React from 'react';
import { Link } from 'react-router-dom';

const QuickPreview = ({ id, img, name, location, gender }) => {
  return (
    <div id={`${id}`} data-uk-modal="center: true; bg-close: false">
      <div className="uk-modal-dialog uk-modal-body uk-padding-remove">
        <button className="uk-modal-close-default" data-uk-close />

        <div
          className="uk-grid uk-child-width-1-2@s uk-grid-collapse"
          data-uk-grid>
          <div className="uk-inline uk-transition-toggle">
            <img src={img} className="feed-modal" />
            <div className="uk-visible@m uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-middle uk-flex-center">
              <div className="uk-text-center">
                <button className="uk-button uk-button-default uk-margin-small btn-overlay">
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: heart; ratio: 0.75"
                  />Date
                </button>
                <br />
                <button className="uk-button uk-button-default uk-margin-small btn-overlay">
                  <span
                    className="uk-margin-small-right"
                    data-uk-icon="icon: happy; ratio: 0.75"
                  />Adopt
                </button>
              </div>
            </div>
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
                <div className="uk-button-group uk-hidden@m uk-margin-small-bottom uk-width-1-1 uk-child-width-1-2">
                  <button className="uk-button uk-button-default">
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: heart; ratio: 0.75"
                    />
                    <span className="uk-visible@s">Date</span>
                  </button>
                  <button className="uk-button uk-button-default">
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: happy; ratio: 0.75"
                    />
                    <span className="uk-visible@s">Adopt</span>
                  </button>
                </div>
                <Link
                  to={`/feed/${id}`}
                  className="uk-button uk-button-primary uk-width-1-1@s"
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
