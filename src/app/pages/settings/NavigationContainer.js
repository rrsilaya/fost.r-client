import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = state => ({
  auth: state.auth
});

const NavigationContainer = connect(mapStateToProps, {})(Navigation);

export default NavigationContainer;
