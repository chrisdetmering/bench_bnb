import { LOADING_BENCH } from '../Actions/loading_actions';
import { RECEIVE_BENCH } from '../Actions/bench_actions'; 

const initialState = {
  singleBench: false,
  allBenches: false
}

export default (state = initialState, action) => {
  Object.freeze(state)

  switch (action.type) {

  case LOADING_BENCH:
      return { ...state, singleBench: true }
  case RECEIVE_BENCH: 
      return { ...state, singleBench: false }
  default:
    return state
  }
}
