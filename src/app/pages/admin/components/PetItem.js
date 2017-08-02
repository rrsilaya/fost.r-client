import React from 'react';
import moment from 'moment';
import { modal } from 'uikit';

const PetItem = ({ name, kind, breed, img, birthday, id, deletePet }) => {
  const handleDelete = () => {
    modal
      .confirm(`Are you sure you want to remove ${name}?`, { center: true })
      .then(
        () => {
          deletePet(id);
        },
        () => {}
      );
  };

  return (
    <tr>
      <td className="uk-preserve-width">
        <img src={img} className="uk-border-circle pet-icon" />
      </td>
      <td>{name}</td>
      <td>{kind} / {breed}</td>
      <td>{moment(birthday).format('MMMM D, YYYY')}</td>
      <td className="uk-preserve-width">
        <button data-uk-icon="icon: close;" onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default PetItem;
