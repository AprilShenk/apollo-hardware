import React from "react";
import { getStars } from "../../utils/rating";
import "./Reviews.css";

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <div className="product-review" key={index}>
      <p id="reviews-rating">{getStars(review.rating)}</p>
      <h3 className="reviews-info">{review.author}</h3>
      <p className="reviews-info">{review.description}</p>
    </div>
  ));

  return <div className="product-reviews">{reviewsJSX}</div>;
};

export default Reviews;
