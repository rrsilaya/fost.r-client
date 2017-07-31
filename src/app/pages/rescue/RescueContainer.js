import { connect } from 'react-redux';
import Rescue from './Rescue';

import { updateForm } from '../../ducks/rescue';

const mapStateToProps = state => ({
  form: state.rescue.form,
  requests: state.rescue.requests
});

const RescueContainer = connect(mapStateToProps, { updateForm })(Rescue);

export default RescueContainer;
