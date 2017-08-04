import React from 'react';

const Feature = () => {
  const features = [
    {
      icon: 'home',
      title: 'Adopt',
      content: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
      icon: 'heart',
      title: 'Date',
      content: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
      icon: 'social',
      title: 'Connect',
      content: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    },
    {
      icon: 'lifesaver',
      title: 'Rescue',
      content: 'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'
    }
  ];

  return (
    <div className="uk-section uk-section-default">
      <div className="uk-margin-medium-right uk-margin-medium-left">
        <h2 className="uk-heading-line uk-text-center">
          <span>Features</span>
        </h2>
        <div
          className="uk-grid-small uk-child-width-1-4@m uk-child-width-1-2@s uk-child-width-1-1 uk-text-center"
          data-uk-grid>
          {features.map((feature, key) =>
            <div key={key}>
              <span data-uk-icon={`icon: ${feature.icon}; ratio: 2;`} />
              <br />
              <h3 className="uk-margin-small">{feature.title}</h3>
              <p>{feature.content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feature;
