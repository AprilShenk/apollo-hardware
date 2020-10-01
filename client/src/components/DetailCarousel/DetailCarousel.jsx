import React, { useState } from "react";
import "./DetailCarousel.css";

const DetailCarousel = (props) => {
  const [showImage, setShowImage] = useState(props.imgURL1);

  const handleImageClick = (e) => {
    setShowImage(e.target.src);
  };

  return (
    <div className="detail-carousel">
      <div className="thumbnails">
        <img
          className="image-thumbnail"
          src={props.imgURL1}
          alt={props.name}
          onClick={handleImageClick}
        />
        <img
          className="image-thumbnail"
          src={props.imgURL2}
          alt={props.name}
          onClick={handleImageClick}
        />
        <img
          className="image-thumbnail"
          src={props.imgURL3}
          alt={props.name}
          onClick={handleImageClick}
        />
      </div>
      <div className="show-image-container">
        <img className="show-image" src={showImage} alt={props.name} />
      </div>  
    </div>
  );
};

export default DetailCarousel;
