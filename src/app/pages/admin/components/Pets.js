import React from 'react';

import PetItem from './PetItem';
import AddPet from './AddPet';

const Pets = ({ pets }) => {
  return (
    <div>
      <AddPet />
      {pets.length === 0
        ? <p className="uk-text-center">
            Your pets will show here. Try to add some.
          </p>
        : <table className="uk-table uk-table-divider uk-table-middle uk-table-small uk-table-responsive">
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
              {pets.map((pet, key) =>
                <PetItem
                  name={pet.name}
                  kind={pet.kind}
                  img={pet.img}
                  birthday={'January 1, 2017'}
                  id={pet._id}
                />
              )}
            </tbody>
          </table>}
      <div className="uk-text-center">
        <button
          className="uk-button uk-button-primary"
          data-uk-toggle="target: #addpet-modal">
          Add Pet
        </button>
      </div>
    </div>
  );
};

export default Pets;
