import { connect } from 'react-redux';
import PetProfile from './PetProfile';

import { loadProfile } from '../../ducks/pet-profile';

const mapStateToProps = state => ({
  isLoading: state.petProfile.isLoading,
  data: state.petProfile.data
});

const PetProfileContainer = connect(mapStateToProps, { loadProfile })(
  PetProfile
);
export default PetProfileContainer;
