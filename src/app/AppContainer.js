import { connect } from 'react-redux';
import App from './App';

import { logout, clearNotif, checkAuth } from './ducks/auth';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  isLoading: state.auth.isLoading,
  hasNotification: state.auth.hasNotification,
  accountType: state.auth.accountType
});

const AppContainer = connect(mapStateToProps, {
  logout,
  clearNotif,
  checkAuth
})(App);

export default AppContainer;
