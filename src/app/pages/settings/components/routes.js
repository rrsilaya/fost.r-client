import Account from './Account'; // import all your components here
import Privacy from './Privacy';
import Shelter from './Shelter';

const links = [
  // Change these with your links
  {
    icon: 'user',
    label: 'Edit Profile',
    route: '/settings/profilesettings',
    component: Account // component to render
  },
  {
    icon: 'lock',
    label: 'Privacy',
    route: '/settings/privacysettings',
    component: Privacy
  },
  {
    icon: 'home',
    label: 'Muted Shelters',
    route: '/settings/mutedshelters',
    component: Shelter
  }
];

export default links;
