import { connect } from 'react-redux';
import Login from './Login';
import { updateForm } from '../../ducks/auth';

const mapStateToProps = state => ({
  auth: state.auth.isAuth,
  loginForm: state.auth.loginForm
});

const LoginContainer = connect(mapStateToProps, { updateForm })(Login);

export default LoginContainer;
