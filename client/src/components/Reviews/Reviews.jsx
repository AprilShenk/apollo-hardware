import React from "react";
import { getStars } from "../../utils/rating";
import "./Reviews.css";

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => (
    <div className="product-review" key={index}>
      <div className="reviews-top">
        <span className="reviews-info">{review.author}</span>
        <span id="reviews-rating">{getStars(review.rating)}</span>
      </div>
      <p className="reviews-info">{review.description}</p>
    </div>
  ));

  return <div className="product-reviews">{reviewsJSX}</div>;
};

export default Reviews;
