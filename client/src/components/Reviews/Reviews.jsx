import React from "react";
import { getStars } from "../../utils/rating";
// import "./Reviews.css";

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <div className="product-review" key={index}>
      <h3>{review.author}</h3>
      <p>{getStars(review.rating)}</p>
      <p>{review.description}</p>
    </div>
  ));

  return <div className="product-reviews">{reviewsJSX}</div>;
};

export default Reviews;