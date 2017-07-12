import { connect } from 'react-redux';
import Feed from './Feed';

import { loadPets } from '../../ducks/feed';

const mapStateToProps = state => ({
  pets: state.feed.pets,
  isFeedLoading: state.feed.isFeedLoading,
  hasErrorLoading: state.feed.hasErrorLoading,
  feed: state.feed.feed
});

const FeedContainer = connect(mapStateToProps, { loadPets })(Feed);

export default FeedContainer;
