import React from "react";
import "./ReviewForm.css";
const ReviewForm = ({ author, rating, description, onChange, onSubmit }) => {
  return (
    <div className="review-form-container">
      <form className="review-create-form" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          className="review-form-author"
          placeholder="Name"
          value={author}
          required
          autoFocus
          onChange={(e) => onChange(e)}
        />
        <input
          type="number"
          className="review-form-rating"
          placeholder="Rating (1-5)"
          value={rating}
          required
          autoFocus
          onChange={(e) => onChange(e)}
        />
        <textarea
          className="reiew-form-description"
          rows={10}
          placeholder="Write your review..."
          value={description}
          name="description"
          required
          onChange={(e) => onChange(e)}
        />
        <button type="submit" className="review-form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
