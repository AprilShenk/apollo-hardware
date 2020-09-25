import React from 'react';

const Product = (props) => {
  return (
    <div>
      {props.name}
      {props.imgURL1}
      {props.description}
      {props.price}
      {props.rating}
      {props.quantity}
    </div>
  );
};

export default Product;