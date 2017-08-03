import Account from './Account'; // import all your components here
import Privacy from './Privacy';
import ProfilePicture from './ProfilePicture';
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
    icon: 'camera',
    label: 'Change Profile Picture',
    route: '/settings/changeprofilepicture',
    component: ProfilePicture
  }
];

export default links;
