import { connect } from 'react-redux';
import Notifications from './Notifications';

import { getNotifications } from '../../ducks/notifications';

const mapStateToProps = state => ({
  isLoading: state.notifications.isLoading,
  hasFailed: state.notifications.hasFailed,
  notifications: state.notifications.notifications
});

const NotificationsContainer = connect(mapStateToProps, { getNotifications })(
  Notifications
);
export default NotificationsContainer;
