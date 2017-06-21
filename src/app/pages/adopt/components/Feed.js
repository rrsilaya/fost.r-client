import React, { Component } from 'react';

import Tile from './Tile';

class Feed extends Component {
  render() {
    const grids = (
      <div
        className="uk-grid uk-grid-small uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l"
        data-uk-grid>
        {this.props.feed.map((pet, id) =>
          <Tile key={id} img={pet.url} name={pet.title.split(' ')[0]} />
        )}
      </div>
    );

    return (
      <div className="uk-margin-medium-left uk-margin-medium-right">
        {this.props.isLoading
          ? <div className="uk-text-center"><div data-uk-spinner={''} /></div>
          : grids}
      </div>
    );
  }
}

export default Feed;
