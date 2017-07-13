import { connect } from 'react-redux';
import PetRequest from './PetRequest';

const mapStateToProps = state => ({
  isLoading: false
});

const PetRequestContainer = connect(mapStateToProps, {})(PetRequest);
export default PetRequestContainer;
