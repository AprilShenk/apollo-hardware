// import React, { useEffect, useState } from "react";
import React from 'react'
import Layout from "../../components/shared/Layout/Layout";
// import { getProducts } from "../../services/products";

const SearchResults = (props) => {


  return (
    <Layout handleChange={props.handleChange}>
      <h1>Search Results</h1>
      {props.queriedProducts.map((product, index) => {
        return (
          <div className="result-card">
            {product._id}
            {product.name}
            {product.imgURL1}
            {product.imgURL2}
            {product.imgURL3}
            {product.description}
            {product.price}
            {product.rating}
            {index}
          </div>
        )
        
      })}
    </Layout>
  );
};

export default SearchResults;