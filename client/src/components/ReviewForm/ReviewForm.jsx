import React from "react";
import "./ReviewForm.css";

const ReviewForm = ({ name, rating, content, onChange, onSubmit }) => {
  return (
    <div className="review-create-container">
      <form className="review-form" onSubmit={(e)=>onSubmit(e)}>
        <input
          className="review-name"
          placeholder="Name..."
          value={name}
          name="name"
          required
          onChange={(e) => onChange(e)}
        />
        <input
          className="review-rating"
          placeholder="Rating (1-5)"
          value={rating}
          name="rating"
          required
          onChange={(e) => onChange(e)}
        />
        <textarea
          className="review-content"
          placeholder="Write your review..."
          value={content}
          name="descirpition"
          required
          onChange={(e) => onChange(e)}
        />
        <button type="submit" className="review-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
