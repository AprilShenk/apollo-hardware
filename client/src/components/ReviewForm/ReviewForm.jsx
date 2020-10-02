import React from "react";
import "./ReviewForm.css";
const ReviewForm = ({ author, rating, description, onChange, onSubmit }) => {
  return (
    <div className="review-form-container">
      <form className="review-create-form" onSubmit={(e) => onSubmit(e)}>
     <div className="left-side">
        <input
          type="text"
          className="review-inputs"
          placeholder="Name"
          name="author"
          value={author}
          required
          autoFocus
          onChange={(e) => onChange(e)}
        />
        <input
          type="number"
          className="review-inputs"
          placeholder="Rating (1-5)"
          name="rating"
          value={rating}
          required
          autoFocus
          onChange={(e) => onChange(e)}
          />
          <button type="submit" className="review-form-submit">
            Submit Review
        </button>
        </div>
        <div className="right-side">
        <textarea
          className="review-form-description"
          rows={10}
          placeholder="Write your review..."
          value={description}
          name="description"
          required
          onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
