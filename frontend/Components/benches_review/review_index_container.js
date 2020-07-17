import { connect } from 'react-redux'; 
import ReviewIndex from './review_index'; 

const mapStateToProps = (state, ownProps) => { 
  let reviews = state.entities.reviews
  console.log('review_index_container', reviews)
  return { 
    reviews
  }
}

export default connect( 
  mapStateToProps
)(ReviewIndex); 
