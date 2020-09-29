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
            {product.name}

          </div>
        )
        
      })}
    </Layout>
  );
};

export default SearchResults;