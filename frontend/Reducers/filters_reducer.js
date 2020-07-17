import { UPDATE_FILTER } from '../Actions/filter_actions';

let initialState = { 
  bounds: {}, 
  minSeating: 1, 
  maxSeating: 10
}

export default (prevState = initialState, action) => {
  Object.freeze(prevState)
  switch (action.type) {

  case UPDATE_FILTER:
    return {...prevState, [action.filter]: action.value }

  default:
      return prevState
  }
}
