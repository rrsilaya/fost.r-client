import { connect } from 'react-redux';
import Date from './Date';

import { setDate } from '../../../ducks/pet-date';

const mapStateToProps = state => ({
  date: state.petDate.date
});

const DateContainer = connect(mapStateToProps, { setDate })(Date);
export default DateContainer;
