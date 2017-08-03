import React from 'react';
import DocumentTitle from 'react-document-title';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { modal } from 'uikit';

import CenterLoader from '../../../components/CenterLoader';
import AnonNav from '../../../components/navigation/AnonNav';

const Shelters = () => {
  return (
    <div>
      <h2> Muted Shelters</h2>
      <div className="uk-margin uk-text-right">
        <div>
          <div className="uk-card uk-card-default uk-card-large uk-card-body">
            <form className="uk-search uk-search-default">
              <a href="" className="uk-search-icon-flip" data-uk-search-icon />
              <input
                className="uk-search-input"
                type="search"
                placeholder="Search Shelter..."
              />
            </form>

            <dl className="uk-description-list uk-description-list-divider uk-text-left">
              <dt>Shelter 1</dt>
              <dd>
                <span data-uk-icon="icon: close; ratio: 2" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </dd>
              <dt>Shelter 2</dt>
              <dd>
                <span data-uk-icon="icon: close; ratio: 2" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </dd>
              <dt>Shelter 3</dt>

              <dd>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shelters;
