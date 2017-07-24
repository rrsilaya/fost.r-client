import { connect } from 'react-redux';
import CommunityPost from './CommunityPost';

import { getPostData } from '../../ducks/community-post';

const mapStateToProps = state => ({
  isLoading: state.communityPost.isGettingData,
  hasFailed: state.communityPost.isGettingDataFailed,
  activePost: state.communityPost.activePost
});

const CommunityPostContainer = connect(mapStateToProps, { getPostData })(
  CommunityPost
);
export default CommunityPostContainer;
