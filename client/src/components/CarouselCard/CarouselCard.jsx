import React from "react";
import "./CarouselCard.css";
import { Link } from "react-router-dom";

const CarouselCard = (props) => {
  return (
    <Link to={`/products/${props.id}`} className="carousel-link">
      <img className="show-image" src={props.imgURL1} alt={props.name} />
    </Link>
  );
};

export default CarouselCard;
