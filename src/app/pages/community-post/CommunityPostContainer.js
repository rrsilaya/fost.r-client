import { connect } from 'react-redux';
import CommunityPost from './CommunityPost';

import {
  getPostData,
  getPostComments,
  updateForm,
  replyToPost
} from '../../ducks/community-post';

const mapStateToProps = state => ({
  isLoading: state.communityPost.isGettingData,
  hasFailed: state.communityPost.isGettingDataFailed,
  activePost: state.communityPost.activePost,
  isLoadingComments: state.communityPost.isLoadingComments,
  isLoadingCommentsFailed: state.communityPost.isLoadingCommentsFailed,
  comments: state.communityPost.comments,
  replyForm: state.communityPost.replyForm,
  activeUser: state.auth.activeUser
});

const CommunityPostContainer = connect(mapStateToProps, {
  getPostData,
  getPostComments,
  updateForm,
  replyToPost
})(CommunityPost);
export default CommunityPostContainer;
