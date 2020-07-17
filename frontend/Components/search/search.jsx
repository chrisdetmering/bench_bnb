import React from 'react'; 
import BenchIndex from './bench_index'; 
import BenchMap from '../bench_map/benchMap';
import FilterForm from './filter_form';

export const Search = (props) => (
  <div>
    <BenchMap 
      benches={props.benches}
      updateFilter={props.updateFilter} />
    <FilterForm 
      updateFilter={props.updateFilter}/>
    <BenchIndex 
      benches={props.benches}/>
  </div>
)

export default Search;