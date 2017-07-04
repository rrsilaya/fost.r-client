import React, { Component } from 'react';

class Tile extends Component {
  render() {
    const style = {
      backgroundImage: `url(${this.props.img})`,
      backgroundColor: '#efefef',
      overflowX: 'hidden'
    };

    return (
      <div>
        <div className="uk-card uk-card-small uk-card-default">
          <div className="uk-card-media-top">
            <div className="uk-background-cover" style={style}>
              <img
                src={this.props.img}
                alt={this.props.key}
                style={{
                  minWidth: '100%',
                  minHeight: '170px',
                  maxHeight: '250px',
                  visibility: 'hidden'
                }}
              />
            </div>
          </div>
          <div className="uk-card-body">
            <div className="uk-card-badge uk-label">{this.props.kind}</div>
            <h3 className="uk-card-title">{this.props.name}</h3>

            <div className="uk-grid uk-grid-small uk-grid-divider" data-uk-grid>
              <div className="uk-width-1-2">
                <span
                  className="uk-margin-small-right uk-icon"
                  data-uk-icon="icon: calendar"
                />
                {this.props.age}
              </div>
              <div className="uk-width-1-2">
                <span
                  className="uk-margin-small-right uk-icon"
                  data-uk-icon="icon: info"
                />
                {this.props.gender}
              </div>
              <div className="uk-width-1-1">
                <span
                  className="uk-margin-small-right uk-icon"
                  data-uk-icon="icon: location"
                />
                {this.props.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
