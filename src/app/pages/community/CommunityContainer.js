import { connect } from 'react-redux';
import Community from './Community';

import { getActivePosts } from '../../ducks/community';

const mapStateToProps = state => ({
  isGettingActivePosts: state.community.isGettingActivePosts,
  isGettingActivePostsFailed: state.community.isGettingActivePostsFailed,
  userActivePosts: state.community.userActivePosts
});

const CommunityContainer = connect(mapStateToProps, { getActivePosts })(
  Community
);

export default CommunityContainer;
