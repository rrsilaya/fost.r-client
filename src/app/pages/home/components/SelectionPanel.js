import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SelectionPanel extends Component {
  render() {
    return (
      <div
        className="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match"
        data-uk-grid>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-fade">
            <p className="uk-text-center">Fade</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-scale-up">
            <p className="uk-text-center">Scale Up</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-scale-down">
            <p className="uk-text-center">Scale Down</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-shake">
            <p className="uk-text-center">Shake</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-left">
            <p className="uk-text-center">Left</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-top">
            <p className="uk-text-center">Top</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-bottom">
            <p className="uk-text-center">Bottom</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-right">
            <p className="uk-text-center">Right</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-left-small">
            <p className="uk-text-center">Left Small</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-top-small">
            <p className="uk-text-center">Top Small</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-bottom-small">
            <p className="uk-text-center">Bottom Small</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-right-small">
            <p className="uk-text-center">Right Small</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-left-medium">
            <p className="uk-text-center">Left Medium</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-top-medium">
            <p className="uk-text-center">Top Medium</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-bottom-medium">
            <p className="uk-text-center">Bottom Medium</p>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div className="uk-card uk-card-default uk-card-body uk-animation-slide-right-medium">
            <p className="uk-text-center">Right Medium</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionPanel;
