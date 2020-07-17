import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../Actions/bench_actions';
const initialState = {}

export default (state = initialState, action) => {
  Object.freeze(state); 
  
  switch (action.type) {
  case RECEIVE_BENCHES:
      return Object.assign({}, action.benches)
  case RECEIVE_BENCH: 
      return {...state, [action.bench.id]:action.bench } 
  default:
    return state
  }
}



