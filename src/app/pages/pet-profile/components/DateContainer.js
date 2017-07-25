import { connect } from 'react-redux';
import Date from './Date';

import { setDate, submitRequest } from '../../../ducks/pet-date';

const mapStateToProps = state => ({
  date: state.petDate.date,
  isLoading: state.petDate.isLoading
});

const DateContainer = connect(mapStateToProps, { setDate, submitRequest })(
  Date
);
export default DateContainer;
