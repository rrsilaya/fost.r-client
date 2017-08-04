import { connect } from 'react-redux';
import Settings from './Settings';
import {
  changeForm,
  importData,
  clearCreate,
  submitChange
} from './../../ducks/updateProfile';

const mapStateToProps = state => ({
  form: state.updateProfile.form
});

const SettingsContainer = connect(mapStateToProps, {
  changeForm,
  importData,
  clearCreate,
  submitChange
})(Settings);
export default SettingsContainer;
