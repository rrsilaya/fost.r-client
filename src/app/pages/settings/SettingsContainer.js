import { connect } from 'react-redux';
import Settings from './Settings';
import updateProfile from './../../ducks/updateProfile';

const mapStateToProps = state => ({});

const SettingsContainer = connect(mapStateToProps, {})(Settings);
export default SettingsContainer;
