import React from 'react';

const Product = (props) => {
  return (
    <div>
      {props.name}
      <img src={props.imgURL1} alt={props.name} />
      {props.price}
      {/* {props.rating} */}
    </div>
  );
};

export default Product;