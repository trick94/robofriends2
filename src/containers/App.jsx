import { requestRobots, setSearchField } from '../actions';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => requestRobots(dispatch)
  }
}

function App(props) {
  return <MainPage {...props}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);