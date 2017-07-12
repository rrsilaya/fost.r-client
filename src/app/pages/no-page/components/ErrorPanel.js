import React, { Component } from 'react';

class NoPage extends Component {
  render() {
    return (
      <div className="uk-text-center uk-position-center">
        <div className="uk-inline-clip uk-transition-toggle uk-light">
          <img
            className="uk-border-circle"
            src="https://i.ytimg.com/vi/Mq0yEI_xpb8/hqdefault.jpg"
            alt="image"
          />
          <div className="uk-position-center">
            <div className="uk-transition-slide-top-small">
              <h2 className="uk-margin-remove"><b>You can try: </b></h2>
            </div>
            <div className="uk-transition-slide-bottom-small">
              <h4 className="uk-margin-remove"><b>• Reloading the page</b></h4>
            </div>
            <div className="uk-transition-slide-bottom-small">
              <h4 className="uk-margin-remove">
                <b>• Choose another route</b>
              </h4>
            </div>
          </div>
        </div>
        <h1 className="uk-margin-small-top">
          Oops! You have reached 404 page!
        </h1>
      </div>
    );
  }
}

export default NoPage;
