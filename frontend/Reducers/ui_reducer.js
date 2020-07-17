import { combineReducers } from 'redux'; 
import filtersReducer from './filters_reducer'; 
import loadingReducer from './loading_reducer';

export default combineReducers({ 
  filter: filtersReducer, 
  loading: loadingReducer
})
