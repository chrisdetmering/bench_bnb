import React from 'react'

export const ReviewIndexItem = props => {
  return (
    <li>
      <p>{props.review.comment}</p>
      <p>Rating: {props.review.rating}</p>
      <p>User: {props.review.user_id}</p>
    </li>
  )
}

