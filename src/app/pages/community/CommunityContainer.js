import { connect } from 'react-redux';
import Community from './Community';

import {
  getActivePosts,
  getFeedPosts,
  handleTabChange,
  updateForm,
  addPost,
  resetForm
} from '../../ducks/community';

const mapStateToProps = state => ({
  activeTab: state.community.activeTab,

  isGettingActivePosts: state.community.isGettingActivePosts,
  isGettingActivePostsFailed: state.community.isGettingActivePostsFailed,
  userActivePosts: state.community.userActivePosts,
  feedPagination: state.community.feedPagination,
  feedPageTotal: state.community.feedPageTotal,

  isGettingFeedPosts: state.community.isGettingFeedPosts,
  isGettingFeedPostsFailed: state.community.isGettingFeedPostsFailed,
  userFeedPosts: state.community.userFeedPosts,

  form: state.community.form,
  hasFailed: state.community.hasFailed,

  activeUser: state.auth.activeUser
});

const CommunityContainer = connect(mapStateToProps, {
  getActivePosts,
  getFeedPosts,
  handleTabChange,
  updateForm,
  addPost,
  resetForm
})(Community);

export default CommunityContainer;
