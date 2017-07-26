import React from 'react';

const PetItem = () => {
  return (
    <tr>
      <td className="uk-preserve-width">
        <img
          src="https://placeimg.com/441/256/animals/grayscale"
          className="uk-border-circle pet-icon"
        />
      </td>
      <td>John</td>
      <td>Dog, Pug</td>
      <td>January 1, 2017</td>
      <td className="uk-preserve-width">
        <button data-uk-icon="icon: close;" />
      </td>
    </tr>
  );
};

export default PetItem;
