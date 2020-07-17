import React, { Component } from 'react'
import BenchMap  from '../bench_map/benchMap';
import ReviewIndexContainer from '../benches_review/review_index_container';

export default class BenchShow extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() { 
    this.props.getBench(this.props.match.params.benchId)
  }
  
  componentDidUpdate() { 
    console.log('bench_show didUpdate')
  }

  render() { 
    return (
      // 
      <div>
        {this.props.loading || !this.props.bench ?
          <div>Loading...</div>
          : <div>
            <h1>{this.props.bench.description}</h1>
            {this.props.bench.photoUrl ?
              <img
                src={this.props.bench.photoUrl} alt="picture of a bench"
                style={{ height: '300px', width: '200px' }} />
              : null}
            <BenchMap singleBench={this.props.bench} />
            <ReviewIndexContainer
              bench={this.props.bench} />
            
              
              
          </div>
        }
      </div>
    )
  }
}

