import { connect } from 'react-redux';
import Community from './Community';

import {
  getActivePosts,
  getFeedPosts,
  handleTabChange,
  updateForm,
  addPost
} from '../../ducks/community';

const mapStateToProps = state => ({
  activeTab: state.community.activeTab,

  isGettingActivePosts: state.community.isGettingActivePosts,
  isGettingActivePostsFailed: state.community.isGettingActivePostsFailed,
  userActivePosts: state.community.userActivePosts,

  isGettingFeedPosts: state.community.isGettingFeedPosts,
  isGettingFeedPostsFailed: state.community.isGettingFeedPostsFailed,
  userFeedPosts: state.community.userFeedPosts,

  form: state.community.form,
  hasFailed: state.community.hasFailed
});

const CommunityContainer = connect(mapStateToProps, {
  getActivePosts,
  getFeedPosts,
  handleTabChange,
  updateForm,
  addPost
})(Community);

export default CommunityContainer;
