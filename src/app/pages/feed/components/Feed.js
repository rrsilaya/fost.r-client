import React, { Component } from 'react';
import StackGrid, { transitions } from 'react-stack-grid';

import Tile from './Tile';
import QuickPreview from './QuickPreview';

const { fadeUp } = transitions;

class Feed extends Component {
  render() {
    const grids = (
      <StackGrid
        appear={fadeUp.appear}
        columnWidth={280}
        gutterHeight={10}
        gutterWidth={10}>
        {this.props.feed.map((pet, id) =>
          <div key={id}>
            <Tile
              img={pet.img}
              name={pet.name}
              age={pet.age}
              location={pet.location}
              gender={pet.gender}
              kind={pet.kind}
            />
          </div>
        )}
      </StackGrid>
    );

    return (
      <div>
        {this.props.isLoading
          ? <div className="uk-text-center"><div data-uk-spinner={''} /></div>
          : this.props.hasErrorLoading ? <p>An error occured.</p> : grids}
        {this.props.feed.map((pet, key) =>
          <QuickPreview
            key={key}
            id={pet.name.toLowerCase()}
            img={pet.img}
            name={pet.name}
            location={pet.location}
            gender={pet.gender}
          />
        )}
      </div>
    );
  }
}

export default Feed;
