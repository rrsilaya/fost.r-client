import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({
  auth: state.auth
});

const MainContainer = connect(mapStateToProps, {})(Main);

export default MainContainer;
