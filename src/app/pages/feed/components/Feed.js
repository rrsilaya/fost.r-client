import React, { Component } from 'react';
import StackGrid, { transitions } from 'react-stack-grid';
import moment from 'moment';

import Tile from './Tile';
import QuickPreview from './QuickPreview';

const { fadeUp } = transitions;

class Feed extends Component {
  getHeight = (height, width) => {
    const ratio = height > width ? width / height : height / width;
    const minWidth = 280;
    const finHeight = ratio * minWidth;

    return finHeight < 170 ? 170 : finHeight;
  };

  render() {
    const grids = (
      <div className="uk-margin-medium-top uk-margin-large-bottom ">
        <StackGrid
          appear={fadeUp.appear}
          columnWidth={280}
          gutterHeight={10}
          gutterWidth={10}>
          {this.props.feed.map((pet, id) =>
            <div key={id}>
              <Tile
                img={pet.url}
                height={this.getHeight(pet.height, pet.width)}
                name={pet.name}
                age={moment(pet.birthday).fromNow(true)}
                location={pet.shelter_Username}
                gender={pet.sex}
                kind={pet.kind}
                pet_id={pet.uuid}
              />
            </div>
          )}
        </StackGrid>
      </div>
    );

    return (
      <div>
        {this.props.isLoading
          ? <div className="uk-text-center"><div data-uk-spinner={''} /></div>
          : this.props.hasErrorLoading
            ? <div className="full uk-flex uk-flex-middle uk-flex-center">
                An error occurred.
              </div>
            : this.props.feed.length === 0
              ? <p className="uk-margin-medium-top uk-text-center uk-text-muted">
                  Available pets should appear here.
                </p>
              : grids}
        {this.props.feed.map((pet, key) =>
          <QuickPreview
            key={key}
            id={pet._id}
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
