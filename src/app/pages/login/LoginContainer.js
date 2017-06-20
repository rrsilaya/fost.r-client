import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = state => ({
  auth: state.auth
});

const LoginContainer = connect(mapStateToProps, {})(Login);

export default LoginContainer;
