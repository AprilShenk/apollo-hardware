import React from 'react';
import '../Product/Product.css'

const Product = (props) => {
  return (
    <div className="product-div">
      <img className="product-image" src={props.imgURL1} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  );
};

export default Product;