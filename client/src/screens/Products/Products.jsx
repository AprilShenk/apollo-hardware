import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import Product from "../../components/Product/Product";
import Sort from "../../components/Sort/Sort";
import "../Products/Products.css";
import { mostPopular, AZ, lowestFirst, highestFirst } from "../../utils/sort";
import { getProducts } from "../../services/products";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);
  const [sort, setSort] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(mostPopular(products));
    };
    fetchProducts();
  }, []);

  const handleSort = (type) => {
    setSort(type);
    switch (type) {
      case "most-popular":
        setQueriedProducts(mostPopular(queriedProducts));
        break;
      case "name-descending":
        setQueriedProducts(AZ(queriedProducts));
        break;
      case "price-ascending":
        setQueriedProducts(lowestFirst(queriedProducts));
        break;
      case "price-descending":
        setQueriedProducts(highestFirst(queriedProducts));
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setQueriedProducts(() => handleSort(sort));
  };

  const productsJSX = allProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      imgURL1={product.imgURL1}
      imgURL2={product.imgURL2}
      imgURL3={product.imgURL3}
      description={product.description}
      price={product.price}
      rating={product.rating}
      key={index}
    />
  ));
  return (
    <Layout>
      <div className="all-products-banner">
        <h1>All Products</h1>
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
      </div>

      <div className="products">{productsJSX}</div>
    </Layout>
  );
};

export default Products;
