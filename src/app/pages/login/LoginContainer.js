import { connect } from 'react-redux';
import Login from './Login';
import { updateForm, login } from '../../ducks/auth';

const mapStateToProps = state => ({
  auth: state.auth.isAuth,
  loginForm: state.auth.loginForm,
  isLoggingIn: state.auth.isLoggingIn
});

const LoginContainer = connect(mapStateToProps, { updateForm, login })(Login);

export default LoginContainer;
