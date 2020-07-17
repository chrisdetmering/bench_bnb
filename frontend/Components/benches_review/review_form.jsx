import React, { Component } from 'react'

export default class ReviewForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       comment: '', 
       rating: 1,
       bench_id: this.props.bench.id 
    }

    this.onFormSubmit = this.onFormSubmit.bind(this); 
  }
  
  onFormSubmit(e) {
    e.preventDefault(); 
    let review = this.state
    this.props.createReview(review).then(
      () => this.setState({...this.state, 
        comment: '', 
        rating: 1
      })
    )
  }

  updateField(field) { 
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }
  
  render() {
    
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="">
            Comment
          </label>
          <br/>
          <input 
            type="text" 
            onChange={this.updateField('comment')}
            value={this.state.comment}/>
          <br/>
          <label htmlFor="">
            Rating
          </label>
          <br/>
          <input 
            type="number" 
            min='1'
            max='5' 
            onChange={this.updateField('rating')}
            value={this.state.rating}/>
            <br/>
          <input type="submit" value='Submit'/>
        </form>
      </div>
    )
  }
}
