import { connect } from 'react-redux';
import Community from './Community';

import { getActivePosts, getFeedPosts } from '../../ducks/community';

const mapStateToProps = state => ({
  isGettingActivePosts: state.community.isGettingActivePosts,
  isGettingActivePostsFailed: state.community.isGettingActivePostsFailed,
  userActivePosts: state.community.userActivePosts,

  isGettingFeedPosts: state.community.isGettingFeedPosts,
  isGettingFeedPostsFailed: state.community.isGettingFeedPostsFailed,
  userFeedPosts: state.community.userFeedPosts
});

const CommunityContainer = connect(mapStateToProps, {
  getActivePosts,
  getFeedPosts
})(Community);

export default CommunityContainer;
