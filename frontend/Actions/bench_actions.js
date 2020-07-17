import * as Bench_Api_Util from '../Util/bench_api_util';
import { loadingBench }  from './loading_actions';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES'; 
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const receiveBenches = benches =>({ 
    type: RECEIVE_BENCHES, 
    benches
})

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
})

export const fetchBenches = (filters) => dispatch => { 
  Bench_Api_Util.fetchBenches(filters).then(
    benches => dispatch(receiveBenches(benches)), 
    error => console.log(error)
  )
}


export const createBench = bench => dispatch =>( 
  Bench_Api_Util.createBench(bench).then(
    bench => dispatch(receiveBench(bench)), 
    error => console.log('receive_bench_error', error)
  )
)

export const fetchBench = id => dispatch => { 
    dispatch(loadingBench())
  return Bench_Api_Util.fetchBench(id).then( 
    bench => dispatch(receiveBench(bench))
  )
}