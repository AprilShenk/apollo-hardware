import React from 'react';
import { Link } from 'react-router-dom'
import '../Product/Product.css'

const Product = (props) => {
  return (
    <Link to={`/products/${props._id}`} className='link'>
      <div className="product-div">
      <img className="product-image" src={props.imgURL1} alt={props.name} />
      <h3>{props.name}</h3>
      <p>${props.price}</p>
    </div>
    </Link>
    
  );
};

export default Product;