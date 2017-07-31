import { connect } from 'react-redux';
import AccountSettings from './AccountSettings';

const mapStateToProps = state => ({
  auth: state.auth
});

const AccountSettingsContainer = connect(mapStateToProps, {})(AccountSettings);

export default AccountSettingsContainer;
