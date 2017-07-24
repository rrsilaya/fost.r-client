import { connect } from 'react-redux';
import Community from './Community';

import {
  getActivePosts,
  getFeedPosts,
  handleTabChange
} from '../../ducks/community';

const mapStateToProps = state => ({
  activeTab: state.community.activeTab,

  isGettingActivePosts: state.community.isGettingActivePosts,
  isGettingActivePostsFailed: state.community.isGettingActivePostsFailed,
  userActivePosts: state.community.userActivePosts,

  isGettingFeedPosts: state.community.isGettingFeedPosts,
  isGettingFeedPostsFailed: state.community.isGettingFeedPostsFailed,
  userFeedPosts: state.community.userFeedPosts
});

const CommunityContainer = connect(mapStateToProps, {
  getActivePosts,
  getFeedPosts,
  handleTabChange
})(Community);

export default CommunityContainer;
