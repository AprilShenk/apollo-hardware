// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "./SearchResults.css";

const SearchResults = (props) => {
  const { setQueriedProducts } = props;
  const history = useHistory();

  useEffect(() => {
    history.action !== "POP" && setQueriedProducts([]);
  }, [history.action, setQueriedProducts]);

  return (
    <Layout handleChange={props.handleChange}>
      <h1 className="search-title">SEARCH RESULTS</h1>
      <div className="results-container">
        {props.queriedProducts.map((product, index) => {
          return (
            <div className="result-card" key={index}>
              <Link
                to={`/products/${product._id}`}
                className="link-product-page"
              >
                <div className="product-div">
                  <img
                    className="product-image"
                    src={product.imgURL1}
                    alt={product.name}
                  />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default SearchResults;
