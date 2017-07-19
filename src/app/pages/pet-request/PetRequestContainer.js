import { connect } from 'react-redux';
import PetRequest from './PetRequest';

import { loadPetData } from '../../ducks/pet-request';

const mapStateToProps = state => ({
  isLoading: state.petRequest.isGettingData,
  hasFailed: state.petRequest.hasFailed,
  petData: state.petRequest.petData
});

const PetRequestContainer = connect(mapStateToProps, { loadPetData })(
  PetRequest
);
export default PetRequestContainer;
