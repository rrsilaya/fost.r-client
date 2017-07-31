import React from 'react';
import { Link } from 'react-router-dom';
import { modal } from 'uikit';

import CenterLoader from '../../../components/CenterLoader';

const QuickPreview = ({ isLoading, data }) => {
  const handleClose = () => {
    modal('#quick-preview-modal').hide();
  };

  return (
    <div id="quick-preview-modal" data-uk-modal="center: true; bg-close: false">
      <div className="uk-modal-dialog uk-modal-body uk-padding-remove">
        <button className="uk-modal-close-default" data-uk-close />

        <div className="uk-inline uk-width-1-1">
          <div
            className="uk-grid uk-child-width-1-2@s uk-grid-collapse"
            data-uk-grid>
            <div className="uk-inline uk-transition-toggle">
              <img src={data.url} alt={data.uuid} className="feed-modal" />
              <div className="uk-visible@m uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-middle uk-flex-center">
                <div className="uk-text-center">
                  <Link
                    to={`/feed/${data.uuid}/date`}
                    className="uk-button uk-button-default uk-margin-small btn-overlay"
                    onClick={handleClose}>
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: heart; ratio: 0.75"
                    />Date
                  </Link>
                  <br />
                  <Link
                    to={`/feed/${data.uuid}/adopt`}
                    className="uk-button uk-button-default uk-margin-small btn-overlay"
                    onClick={handleClose}>
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: happy; ratio: 0.75"
                    />Adopt
                  </Link>
                </div>
              </div>
            </div>
            <div className="uk-flex uk-flex-middle uk-padding-small uk-text-small">
              <div>
                <h2 className="uk-margin-remove">{data.name}</h2>
                <div className="uk-margin-small-bottom">
                  <span className="uk-label uk-label-default uk-margin-small-right">
                    {data.breed}
                  </span>
                  {data.status === 'DATE'
                    ? <span className="uk-label uk-label-warning">On-date</span>
                    : ''}
                </div>
                <p className="uk-margin-remove">
                  Edison bulb freegan helvetica unicorn deep v hoodie
                  microdosing
                  quinoa. Synth messenger bag
                </p>

                <ul className="uk-list uk-list-divider">
                  <li>
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: calendar; ratio: 0.7"
                    />
                    {data.birthday}
                  </li>
                  <li>
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: info; ratio: 0.7"
                    />
                    {data.sex}
                  </li>
                  <li>
                    <span
                      className="uk-margin-small-right"
                      data-uk-icon="icon: home; ratio: 0.7"
                    />
                    {data.shelter_Username}
                  </li>
                </ul>

                <div className="uk-text-center uk-margin-small-top">
                  <div className="uk-button-group uk-hidden@m uk-margin-small-bottom uk-width-1-1 uk-child-width-1-2">
                    <Link
                      to={`/feed/${data.uuid}/date`}
                      className="uk-button uk-button-default"
                      onClick={handleClose}>
                      <span
                        className="uk-margin-small-right"
                        data-uk-icon="icon: heart; ratio: 0.75"
                      />
                      <span className="uk-visible@s">Date</span>
                    </Link>
                    <Link
                      to={`/feed/${data.uuid}/adopt`}
                      className="uk-button uk-button-default"
                      onClick={handleClose}>
                      <span
                        className="uk-margin-small-right"
                        data-uk-icon="icon: happy; ratio: 0.75"
                      />
                      <span className="uk-visible@s">Adopt</span>
                    </Link>
                  </div>
                  <Link
                    to={`/feed/${data.uuid}/profile`}
                    className="uk-button uk-button-primary uk-width-1-1@s"
                    onClick={handleClose}>
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
          {isLoading
            ? [
                <div className="uk-overlay-default uk-position-cover" />,
                <div className="uk-overlay uk-position-center">
                  <CenterLoader />
                </div>
              ]
            : ''}
        </div>
      </div>
    </div>
  );
};

export default QuickPreview;
