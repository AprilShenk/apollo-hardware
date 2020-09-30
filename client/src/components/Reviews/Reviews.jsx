import React from 'react';
import rating from '../../utils/rating'
import './Reviews.css'

const Reviews = () => {

  const reviewsJSX = props.reviews.map((review,index)=>
    <div className="product-review" key={index}>
      <h3>{review.author}</h3>
      {/* star rating */}
      <p>{review.description}</p>
  </div>)

  return (
    <div className="product-reviews">
     {reviewsJSX}
    </div>
  );
};

export default Reviews;