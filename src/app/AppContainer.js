import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  auth: state.auth
});

const AppContainer = connect(mapStateToProps, {})(App);

export default AppContainer;
