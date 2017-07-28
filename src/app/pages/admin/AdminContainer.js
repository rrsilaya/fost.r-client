import { connect } from 'react-redux';
import Admin from './Admin';

import { changeTab, getPets } from '../../ducks/admin';

const mapStateToProps = state => ({
  activeTab: state.admin.activeTab,
  isLoading: state.admin.isLoading,
  hasFailed: state.admin.hasFailed,
  pets: state.admin.pets,
  isAddingPet: state.admin.isAddingPet
});

const AdminContainer = connect(mapStateToProps, { changeTab, getPets })(Admin);
export default AdminContainer;
