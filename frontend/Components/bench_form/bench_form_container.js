import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { createBench } from '../../Actions/bench_actions';

const mapStateToProps = (state, { location }) => { 
  console.log(location)
  return { 
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')
  } 
}

const mapDispatchToProps = dispatch => ({ 
  createBench: bench => dispatch(createBench(bench))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(BenchForm)
