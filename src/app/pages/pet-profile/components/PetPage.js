import React from 'react';
import { Redirect } from 'react-router-dom';

import ImageSwitcher from './ImageSwitcher';
import Profile from './Profile';

const PetPage = ({ petData }) => {
  return (
    <div>
      <Redirect to={`/feed/${petData._id}/profile`} />

      <ImageSwitcher images={[petData.img, petData.img]} />
      <Profile
        id={petData._id}
        name={petData.name}
        gender={petData.gender}
        location={petData.location}
      />
    </div>
  );
};

export default PetPage;
