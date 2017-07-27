import { connect } from 'react-redux';
import App from './App';

import { logout, clearNotif } from './ducks/auth';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  isLoading: state.auth.isLoading,
  hasNotification: state.auth.hasNotification
});

const AppContainer = connect(mapStateToProps, { logout, clearNotif })(App);

export default AppContainer;
