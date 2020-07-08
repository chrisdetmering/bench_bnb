import { createStore, applyMiddleware} from 'redux';
import { thunk } from '../thunk/thunk';
import logger from 'redux-logger'
import rootReducer from '../Reducers/root_reducer';

const configureStore = (preloadState = {}) => ( 
  createStore(rootReducer, preloadState, applyMiddleware(thunk, logger))
)

export default configureStore;