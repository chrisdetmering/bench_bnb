import React, { Component } from 'react'; 
import { ReviewIndexItem } from './review_index_item';
import ReviewFormContainer from './review_form_container';
class ReviewIndex extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

 

  render() { 
  
    let reviews = this.props.reviews.map((review, idx) => {
        return (
          <ReviewIndexItem
            review={review}
            key={review.id} />
        )
      })
    
    return (
      <div>
        <h2>Reviews</h2>
        {/* <h4>Average Rating: {average}</h4> */}
        <ol>{reviews}</ol>
        <ReviewFormContainer bench={this.props.bench} />
      </div>
    )
  }
  
}

export default ReviewIndex;