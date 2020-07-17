export const UPDATE_FILTER = "UPDATE_FILTER"; 
import { fetchBenches } from '../Actions/bench_actions';

export const changeFilter = (filter, value) => {
  return { 
  type: UPDATE_FILTER, 
  filter, 
  value 
  }
}

export const updateFilter = (filter, value) => { 
  return (dispatch, getState) =>  { 
    dispatch(changeFilter(filter, value)); 
    return fetchBenches(getState().ui.filter)(dispatch)
  }
}