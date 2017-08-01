import { connect } from 'react-redux';
import Rescue from './Rescue';

import {
  updateForm,
  sendRescue,
  loadRequests,
  deleteRequest
} from '../../ducks/rescue';

const mapStateToProps = state => ({
  requests: state.rescue.requests,
  isGettingRequests: state.rescue.isGettingRequests,

  form: state.rescue.form,

  isSending: state.rescue.isSending,
  progress: state.rescue.progress,

  accountType: state.auth.accountType
});

const RescueContainer = connect(mapStateToProps, {
  updateForm,
  sendRescue,
  loadRequests,
  deleteRequest
})(Rescue);

export default RescueContainer;
