import React from 'react';
import PetItem from './PetItem';

const Pets = () => {
  return (
    <table className="uk-table uk-table-divider uk-table-middle">
      <thead>
        <tr>
          <th className="uk-table-shrink" />
          <th>Name</th>
          <th>Type/Breed</th>
          <th>Birthday</th>
          <th className="uk-table-shrink" />
        </tr>
      </thead>

      <tbody>
        <PetItem />
        <PetItem />
        <PetItem />
      </tbody>
    </table>
  );
};

export default Pets;
