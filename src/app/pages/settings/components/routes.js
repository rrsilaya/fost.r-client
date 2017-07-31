import Account from './Account'; // import all your components here

const links = [
  // Change these with your links
  {
    icon: 'users',
    label: 'Link 1',
    route: '/settings/link1',
    component: Account // component to render
  },
  {
    icon: 'users',
    label: 'Link 2',
    route: '/settings/link2',
    component: Account
  },
  {
    icon: 'users',
    label: 'Link 3',
    route: '/settings/link3',
    component: Account
  }
];

export default links;
