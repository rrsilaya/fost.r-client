import React, { Component } from 'react';

class Tile extends Component {
  render() {
    return (
      <button
        className="uk-button flat"
        data-uk-toggle={`target: #${this.props.pet_id}`}>
        <div className="uk-card uk-card-small uk-card-default">
          <div className="uk-card-media-top">
            <div className="uk-background-cover">
              <img
                src={this.props.img}
                alt={this.props.key}
                className="feed-tile"
              />
            </div>
          </div>
          <div className="uk-card-body">
            <div className="uk-card-badge uk-label">{this.props.kind}</div>
            <h3 className="uk-card-title uk-text-center tile-header">
              {this.props.name}
            </h3>

            <div
              className="uk-grid uk-grid-small uk-grid-divider uk-text-small"
              data-uk-grid>
              <div className="uk-width-1-2">
                <span
                  className="uk-margin-small-right uk-icon"
                  data-uk-icon="icon: calendar; ratio: 0.7"
                />
                {this.props.age}
              </div>
              <div className="uk-width-1-2">
                <span
                  className="uk-margin-small-right uk-icon"
                  data-uk-icon="icon: info; ratio: 0.7"
                />
                {this.props.gender}
              </div>
              <div className="uk-width-1-1">
                <span
                  className="uk-margin-small-right uk-icon"
                  data-uk-icon="icon: location; ratio: 0.7"
                />
                {this.props.location}
              </div>
            </div>
          </div>
        </div>
      </button>
    );
  }
}

export default Tile;
