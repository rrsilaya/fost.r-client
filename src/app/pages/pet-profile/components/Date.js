import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { modal } from 'uikit';

import 'react-datepicker/dist/react-datepicker.css';
import CenterLoader from '../../../components/CenterLoader';

class Date extends Component {
  handleDatePick = date => {
    this.props.setDate(date);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.date) {
      modal
        .confirm('Are you sure you want to proceed?', { center: true })
        .then(() => this.props.submitRequest(this.props.date), () => {});
    }
  };

  render() {
    return (
      <div>
        <h2 className="uk-heading-line uk-text-center">
          <span>Request for Animal Date</span>
        </h2>

        <p>
          Animal dates are for people who wants to spend their entire day with
          an animal accompanying them.
          You are about to set an animal date with{' '}
          <span className="uk-text-bold">{this.props.name}</span>. Please be
          sure that you have read the terms and conditions before continuing.
        </p>

        <div className="uk-text-center uk-section uk-section-muted uk-padding-remove-vertical">
          <div className="uk-inline uk-width-1-1">
            <div className="uk-margin-medium-top uk-margin-medium-bottom uk-margin-medium">
              <p>
                Please select date for your animal date.<br />
                Today is {moment().format('MMMM D, YYYY')}.
                {this.props.date === ''
                  ? ''
                  : <span>
                      {' '}Your date is in{' '}
                      <span className="uk-text-bold">
                        {this.props.date.diff(moment(), 'days')} days
                      </span>.
                    </span>}
              </p>

              <form onSubmit={this.handleSubmit}>
                <DatePicker
                  className="uk-input uk-text-center uk-width-medium@s"
                  placeholderText="Click to choose date"
                  minDate={moment().add(2, 'days')}
                  maxDate={moment().add(102, 'days')}
                  value={
                    this.props.date === ''
                      ? ''
                      : moment(this.props.date).format('MMMM D, YYYY')
                  }
                  selected={this.props.date}
                  onChange={this.handleDatePick}
                />

                <button
                  className="uk-button uk-button-primary uk-margin"
                  disabled={this.props.isLoading || !this.props.date}>
                  Submit
                </button>
              </form>
            </div>
            {this.props.isLoading
              ? [
                  <div className="uk-overlay-default uk-position-cover" />,
                  <div className="uk-overlay uk-position-center uk-dark">
                    <CenterLoader />
                  </div>
                ]
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

export default Date;
