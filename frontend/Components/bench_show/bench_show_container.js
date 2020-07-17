import { connect } from 'react-redux';
import BenchShow from './bench_show'; 
import { selectBench } from '../../Selectors/bench_selectors';
import { fetchBench } from '../../Actions/bench_actions';

const mapStateToProps = (state, { match: { params } } ) => { 

  return { 
    bench: selectBench(state, params.benchId),
    loading: state.ui.loading.singleBench
  }
}

const mapDispatchToProps = dispatch => ({ 
  getBench: id => dispatch(fetchBench(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow)