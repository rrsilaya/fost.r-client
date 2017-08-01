import { connect } from 'react-redux';
import Rescue from './Rescue';

import { updateForm, sendRescue } from '../../ducks/rescue';

const mapStateToProps = state => ({
  form: state.rescue.form,
  requests: state.rescue.requests,

  isSending: state.rescue.isSending,
  progress: state.rescue.progress
});

const RescueContainer = connect(mapStateToProps, { updateForm, sendRescue })(
  Rescue
);

export default RescueContainer;
