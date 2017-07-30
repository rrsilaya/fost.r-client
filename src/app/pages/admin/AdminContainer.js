import { connect } from 'react-redux';
import Admin from './Admin';

import { changeTab, getPets, getInfo } from '../../ducks/admin';

const mapStateToProps = state => ({
  activeTab: state.admin.activeTab,
  isLoading: state.admin.isLoading,
  hasFailed: state.admin.hasFailed,
  pets: state.admin.pets,

  isAddingPet: state.admin.isAddingPet,

  isGettingInfo: state.admin.isGettingInfo,
  shelterInfo: state.admin.shelterInfo
});

const AdminContainer = connect(mapStateToProps, {
  changeTab,
  getPets,
  getInfo
})(Admin);
export default AdminContainer;
