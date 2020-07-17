import React from 'react'
import { Link } from 'react-router-dom'; 

export default function benchIndexItem(props) {
  let bench = props.bench; 

  return (
    <div>
      <Link to={`/bench/${bench.id}`} >{bench.description}</Link>
    </div>
  )
}

