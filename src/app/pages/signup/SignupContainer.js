import { connect } from 'react-redux';
import Signup from './Signup';

import { updateForm, register, clearCreate } from '../../ducks/signup';

const mapStateToProps = state => ({
  usernameExists: state.signup.usernameExists,
  usernameAvailable: state.signup.usernameAvailable,
  isSearchingUser: state.signup.isSearchingUser,
  form: state.signup.form,
  isCreatingUser: state.signup.isCreatingUser,
  createdUser: state.signup.createdUser
});

const SignupContainer = connect(mapStateToProps, {
  updateForm,
  register,
  clearCreate
})(Signup);
export default SignupContainer;
