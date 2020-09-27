import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getProducts } from "../../services/products";

const SearchResults = () => {

  this.state= useState{[]}

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
    
  }, []);

  

  return (
    <Layout>
      <h1>Search Results</h1>
    </Layout>
  );
};

export default SearchResults;