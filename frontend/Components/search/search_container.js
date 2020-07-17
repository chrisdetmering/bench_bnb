import { connect } from 'react-redux';  
import Search from './search'; 
import { selectAllBenches } from '../../Selectors/bench_selectors';
import { updateFilter } from '../../Actions/filter_actions';

const mapStateToProps = (state) => ({
  benches: selectAllBenches(state)
})

const mapDispatchToProps = dispatch => { 

  return {
   updateFilter: (filter, bounds) => dispatch(updateFilter(filter, bounds)), 
  }
}

export default connect(
  mapStateToProps, 
mapDispatchToProps)(Search); 
