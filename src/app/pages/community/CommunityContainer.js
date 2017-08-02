import { connect } from 'react-redux';
import Community from './Community';

import {
  getActivePosts,
  getFeedPosts,
  handleTabChange,
  updateForm,
  addPost,
  resetForm,
  getMorePosts
} from '../../ducks/community';

const mapStateToProps = state => ({
  activeTab: state.community.activeTab,

  isGettingActivePosts: state.community.isGettingActivePosts,
  isGettingActivePostsFailed: state.community.isGettingActivePostsFailed,
  userActivePosts: state.community.userActivePosts,

  isGettingFeedPosts: state.community.isGettingFeedPosts,
  isGettingFeedPostsFailed: state.community.isGettingFeedPostsFailed,
  userFeedPosts: state.community.userFeedPosts,
  feedPagination: state.community.feedPagination,
  feedPageTotal: state.community.feedPageTotal,
  isAppending: state.community.isAppending,

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
  resetForm,
  getMorePosts
})(Community);

export default CommunityContainer;
