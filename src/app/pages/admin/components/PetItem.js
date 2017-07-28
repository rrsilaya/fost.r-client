import React from 'react';

const PetItem = ({ name, kind, img, birthday, id }) => {
  return (
    <tr>
      <td className="uk-preserve-width">
        <img src={img} className="uk-border-circle pet-icon" />
      </td>
      <td>{name}</td>
      <td>{kind}</td>
      <td>{birthday}</td>
      <td className="uk-preserve-width">
        <button data-uk-icon="icon: close;" />
      </td>
    </tr>
  );
};

export default PetItem;
