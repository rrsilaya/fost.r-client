import { connect } from 'react-redux';
import Feed from './Feed';

import { loadPets, filterFeed, getQuickData } from '../../ducks/feed';

const mapStateToProps = state => ({
  pets: state.feed.pets,
  isFeedLoading: state.feed.isFeedLoading,
  hasErrorLoading: state.feed.hasErrorLoading,
  feed: state.feed.feed,

  isGettingQuickData: state.feed.isGettingQuickData,
  quickData: state.feed.quickData
});

const FeedContainer = connect(mapStateToProps, {
  loadPets,
  filterFeed,
  getQuickData
})(Feed);

export default FeedContainer;
