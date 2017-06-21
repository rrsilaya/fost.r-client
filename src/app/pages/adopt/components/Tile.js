import React, { Component } from 'react';

class Tile extends Component {
  render() {
    const style = {
      minHeight: '170px',
      maxHeight: '200px',
      backgroundImage: `url(${this.props.img})`
    };

    return (
      <div>
        <div className="uk-card uk-card-small uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-media-top">
            <div className="uk-background-cover" style={style} />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title">{this.props.name}</h3>
            <p>
              Age: 1 <br />
              Gender: Male <br />
              Location: Laguna <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;
