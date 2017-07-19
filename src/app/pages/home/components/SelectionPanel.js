import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from './../../../../assets/images/logo2-dblue.png';
import f1 from './../../../../assets/images/feature1.png';
import f2 from './../../../../assets/images/feature2.png';
import f3 from './../../../../assets/images/feature3.png';
import f4 from './../../../../assets/images/feature4.png';

class SelectionPanel extends Component {
  render() {
    return (
      <div
        className="uk-background-muted uk-light uk-padding uk-panel uk-child-width-1-2 uk-child-width-1-4@s uk-grid-match uk-text-center"
        data-uk-grid>
        <div className="uk-animation-toggle">
          <div>
            <div className="uk-card uk-card-default uk-animation-scale-down">
              <div className="uk-card-media-top">
                <img src={f1} alt="" />
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
                <img src={f4} alt="" />
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
                <img src={f3} alt="" />
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
                <img src={f2} alt="" />
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
