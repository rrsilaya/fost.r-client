import { connect } from 'react-redux';
import Admin from './Admin';

import { changeTab } from '../../ducks/admin';

const mapStateToProps = state => ({
  activeTab: state.admin.activeTab
});

const AdminContainer = connect(mapStateToProps, { changeTab })(Admin);
export default AdminContainer;
