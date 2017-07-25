import { connect } from 'react-redux';
import CommunityPost from './CommunityPost';

import { getPostData, getPostComments } from '../../ducks/community-post';

const mapStateToProps = state => ({
  isLoading: state.communityPost.isGettingData,
  hasFailed: state.communityPost.isGettingDataFailed,
  activePost: state.communityPost.activePost,
  isLoadingComments: state.communityPost.isLoadingComments,
  isLoadingCommentsFailed: state.communityPost.isLoadingCommentsFailed,
  comments: state.communityPost.comments
});

const CommunityPostContainer = connect(mapStateToProps, {
  getPostData,
  getPostComments
})(CommunityPost);
export default CommunityPostContainer;
