import { RECEIVE_REVIEW } from '../Actions/review_actions';
import { RECEIVE_BENCH, RECEIVE_BENCHES } from   '../Actions/bench_actions';


export default (state = [], action) => {
  switch (action.type) {
  case RECEIVE_BENCH:
    return [...action.bench.reviews]
  case RECEIVE_REVIEW: 
    return [...state, action.review]
  case RECEIVE_BENCHES: 
    return []
  default:
    return state
  }
}

