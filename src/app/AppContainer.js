import { connect } from 'react-redux';
import App from './App';

import { logout } from './ducks/auth';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  isLoading: state.auth.isLoading
});

const AppContainer = connect(mapStateToProps, { logout })(App);

export default AppContainer;
