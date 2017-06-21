import { connect } from 'react-redux';
import Adopt from './Adopt';

import { loadPets } from '../../ducks/adopt';

const mapStateToProps = state => ({
	pets: state.adopt.pets,
	isFeedLoading: state.adopt.isFeedLoading,
	feed: state.adopt.feed
});

const AdoptContainer = connect(mapStateToProps, { loadPets })(Adopt);

export default AdoptContainer;
