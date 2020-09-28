// import React, { useEffect, useState } from "react";
import React from 'react'
import Layout from "../../components/shared/Layout/Layout";
// import { getProducts } from "../../services/products";

const SearchResults = (props) => {



  

  return (
    <Layout>
      <h1>Search Results</h1>
      <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
            <input
                className="search-input"
                value={props.value}
                onChange={(e) => props.onChange(e)}
                name="Search"
                placeholder="Search"
                type="text"
                autoFocus
            />
        </form>
    </Layout>
  );
};

export default SearchResults;