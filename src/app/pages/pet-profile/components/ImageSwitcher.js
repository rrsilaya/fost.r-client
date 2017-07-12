import React from 'react';

const ImageSwitcher = ({ images }) => {
  return (
    <ul className="uk-switcher switcher-container image-preview">
      {images.map((image, key) =>
        <li key={key}>
          <div className="uk-inline-clip uk-light uk-width-1-1">
            <div
              className="pet-profile-cover"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div
              className={images.length < 2 ? 'uk-invisible' : ''}
              data-uk-switcher="connect: .image-preview;">
              <button
                className="uk-position-center-left uk-margin-left-small"
                data-uk-icon="icon: chevron-left; ratio: 2;"
                data-uk-switcher-item="previous"
              />
              <button
                className="uk-position-center-right uk-margin-right-small"
                data-uk-icon="icon: chevron-right; ratio: 2;"
                data-uk-switcher-item="next"
              />
            </div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default ImageSwitcher;
