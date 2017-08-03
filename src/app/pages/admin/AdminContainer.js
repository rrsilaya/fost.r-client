import { connect } from 'react-redux';
import Admin from './Admin';

import {
  changeTab,
  getPets,
  getInfo,
  updateForm,
  addPet,
  deletePet
} from '../../ducks/admin';

const mapStateToProps = state => ({
  activeTab: state.admin.activeTab,
  isLoading: state.admin.isLoading,
  hasFailed: state.admin.hasFailed,
  pets: state.admin.pets,

  isGettingInfo: state.admin.isGettingInfo,
  shelterInfo: state.admin.shelterInfo,
  isGettingInfoFailed: state.admin.isGettingInfoFailed,

  addForm: state.admin.addForm,
  uploadState: state.admin.uploadState,
  isAddingPet: state.admin.isAddingPet
});

const AdminContainer = connect(mapStateToProps, {
  changeTab,
  getPets,
  getInfo,
  updateForm,
  addPet,
  deletePet
})(Admin);
export default AdminContainer;
