import React from 'react';

const Stats = () => {
  return (
    <div
      className="stats uk-width-1-1 uk-background-cover uk-background-blend-overlay"
      style={{
        backgroundImage: `url('https://placeimg.com/415/409/animals/grayscale')`
      }}>
      <div
        className="uk-grid-small uk-child-width-expand@s uk-child-width-1-2 uk-flex uk-flex-center uk-light uk-padding-small uk-text-center uk-match-grid"
        data-uk-grid>
        <div className="uk-width-1-1 uk-text-center">
          <h3 className="uk-heading-line"><span>Pets Shelter Inc.</span></h3>
        </div>
        <div>
          <h2 className="uk-margin-remove uk-heading-primary">20</h2>
          <span>Ongoing Dates</span>
        </div>
        <div>
          <h1 className="uk-margin-remove uk-heading-primary">400</h1>
          <span>Requests</span>
        </div>
        <div>
          <h2 className="uk-margin-remove uk-heading-primary">30</h2>
          <span>Pets</span>
        </div>
        <div className="uk-width-1-1 uk-text-center uk-text-meta uk-margin-medium-top">
          <div
            className="uk-grid-small uk-grid-divider uk-child-width-1-2 uk-text-center"
            data-uk-grid>
            <div>
              <span
                className="uk-margin-small-right"
                data-uk-icon="icon: location; ratio: 0.75"
              />Location, New York
            </div>
            <div>
              <span
                className="uk-margin-small-right"
                data-uk-icon="icon: mail; ratio: 0.75"
              />mail@mail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
