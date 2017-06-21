import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const AppContainer = connect(mapStateToProps, {})(App);

export default AppContainer;
