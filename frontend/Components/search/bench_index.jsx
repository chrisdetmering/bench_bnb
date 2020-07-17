import React, { Component } from 'react'
import BenchIndexItem from './bench_index_item';
export default class BenchIndex extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    let benches = this.props.benches.map((bench,idx) => (
      <BenchIndexItem key={idx} bench={bench}/>
    ))
    return (
      <div>
       <ul>
         {benches}
       </ul>
      </div>
    )
  }
}
