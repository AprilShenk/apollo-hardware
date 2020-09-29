import React from "react";
import "./Reviews.jsx";

const Reviews = (props) => {
  const reviewsJSX = props.reviews.map((review, index) => {
    <div className="product-review" key={index}>
      <h3>{review.name}</h3>
      <div>{review.rating}</div>
      <p>{review.content}</p>
    </div>;
  });

  return <div className="product-reviews">{reviewsJSX}</div>;
};

export default Reviews;
