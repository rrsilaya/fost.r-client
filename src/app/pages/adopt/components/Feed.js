import React, { Component } from 'react';
import StackGrid, { transitions } from 'react-stack-grid';

import Tile from './Tile';

const { fadeUp } = transitions;

class Feed extends Component {
  render() {
    const grids = (
      <StackGrid
        appear={fadeUp.appear}
        columnWidth={280}
        gutterHeight={10}
        gutterWidth={10}
      >
        {this.props.feed.map((pet, id) =>
          <Tile
            key={id}
            img={pet.img}
            name={pet.name}
            age={pet.age}
            location={pet.location}
            gender={pet.gender}
            kind={pet.kind}
          />
        )}
      </StackGrid>
    );

    return (
      <div>
        {/*this.props.isLoading
          ? <div className="uk-text-center"><div data-uk-spinner={''} /></div>
          : this.props.hasErrorLoading ? <p>An error occured.</p> : grids*/}
        {grids}
      </div>
    );
  }
}

export default Feed;
