import React from 'react';

const Feature = () => {
  const features = [
    {
      icon: 'home',
      title: 'Adopt',
      content:
        'Having a companion is now easy. Adopt an animal based on your interestes or preference.'
    },
    {
      icon: 'heart',
      title: 'Date',
      content:
        'Stressed? Lonely? Have a nice date with these cute animals from different shelters.'
    },
    {
      icon: 'social',
      title: 'Connect',
      content:
        'Handling pet can be hard. Join the community to learn about their experiences and difficulties in handling pets.'
    },
    {
      icon: 'lifesaver',
      title: 'Rescue',
      content:
        'Help save these animals from abuse and neglect by reporting to the shelters about the incident.'
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
