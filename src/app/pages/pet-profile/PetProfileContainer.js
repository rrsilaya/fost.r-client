import { connect } from 'react-redux';
import PetProfile from './PetProfile';

import { loadProfile, requestAdopt } from '../../ducks/pet-profile';

const mapStateToProps = state => ({
  isLoading: state.petProfile.isLoading,
  data: state.petProfile.data
});

const PetProfileContainer = connect(mapStateToProps, {
  loadProfile,
  requestAdopt
})(PetProfile);
export default PetProfileContainer;
