import React from 'react';
import { Redirect } from 'react-router-dom';

import ImageSwitcher from './ImageSwitcher';
import Profile from './Profile';

const PetPage = ({ petData }) => {
  return (
    <div>
      <Redirect to={`/feed/${petData.uuid}/profile`} />

      <ImageSwitcher images={[petData.url]} />
      <Profile
        id={petData.uuid}
        name={petData.name}
        gender={petData.sex}
        location={petData.shelter_Username}
        breed={petData.breed}
        status={petData.status}
        description={petData.description}
        birthday={petData.birthday}
      />
    </div>
  );
};

export default PetPage;
