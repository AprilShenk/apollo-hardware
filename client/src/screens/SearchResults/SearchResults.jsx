// import React, { useEffect, useState } from "react";
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../components/shared/Layout/Layout";
import "./SearchResults.css"

const SearchResults = (props) => {


  return (
    <Layout handleChange={props.handleChange}>
      <div className="results-container">
      <h1 className="search-title">SEARCH RESULTS</h1>
      {props.queriedProducts.map((product, index) => {
        return (
          <div className="result-card">
            <Link to={`/products/${product._id}`} className='link-product-page'>
              <div className="product-div">
                <img className="product-image" src={product.imgURL1} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </Link>

          </div>
        )

      })}
    </div>
    </Layout>
  );
};

export default SearchResults;