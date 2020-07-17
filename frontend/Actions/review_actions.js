import * as Review_Api_Util from '../Util/review_api_util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = review => ({ 
  type: RECEIVE_REVIEW, 
  review 
})

export const createReview = review => dispatch => { 
  return Review_Api_Util.createReview(review).then( 
    review => dispatch(receiveReview(review))
  )
}