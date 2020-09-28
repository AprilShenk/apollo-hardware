import React from "react";
import "./CarouselCard.css";
import { Link } from "react-router-dom";

const CarouselCard = (props) => {
  return (
    <Link to={`/products/${props._id}`} className="link">
      <div className="item-div">
        <img className="item-image" src={props.imgURL1} alt={props.name} />
      </div>
    </Link>
  );
};

export default CarouselCard;
