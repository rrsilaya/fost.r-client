import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from './../../../../assets/images/logo2-dblue.png';

class SelectionPanel extends Component {
  render() {
    return (
      <div
        className="uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match"
        data-uk-grid>
        <div className="uk-animation-toggle">
          <div>
            <div className="uk-card uk-card-default uk-animation-scale-down">
              <div className="uk-card-media-top">
                <img src={image} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div>
            <div className="uk-card uk-card-default uk-animation-scale-down">
              <div className="uk-card-media-top">
                <img src={image} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div>
            <div className="uk-card uk-card-default uk-animation-scale-down">
              <div className="uk-card-media-top">
                <img src={image} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-animation-toggle">
          <div>
            <div className="uk-card uk-card-default uk-animation-scale-down">
              <div className="uk-card-media-top">
                <img src={image} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">Media Top</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionPanel;
