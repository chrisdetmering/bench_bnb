export const selectAllBenches = state => { 
  return Object.values(state.entities.benches)
}

export const selectBench = (state, id) => {
  console.log('benches selector', state.entities.benches)
  return state.entities.benches[id]
}