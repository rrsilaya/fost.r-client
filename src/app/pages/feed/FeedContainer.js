import { connect } from 'react-redux';
import Feed from './Feed';

import {
  loadPets,
  filterFeed,
  getQuickData,
  getMorePets
} from '../../ducks/feed';

const mapStateToProps = state => ({
  pets: state.feed.pets,
  isFeedLoading: state.feed.isFeedLoading,
  hasErrorLoading: state.feed.hasErrorLoading,

  feed: state.feed.feed,
  feedPagination: state.feed.feedPagination,
  feedPageTotal: state.feed.feedPageTotal,
  isAppending: state.feed.isAppending,

  isGettingQuickData: state.feed.isGettingQuickData,
  quickData: state.feed.quickData
});

const FeedContainer = connect(mapStateToProps, {
  loadPets,
  filterFeed,
  getQuickData,
  getMorePets
})(Feed);

export default FeedContainer;
