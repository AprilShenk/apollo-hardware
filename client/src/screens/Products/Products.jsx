import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout"
import Product from "../../components/Product/Product"
import '../Products/Products.css'
import { getProducts } from "../../services/products";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const productsJSX = allProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      imgURL1={product.imgURL1}
      price={product.price}
      rating={product.rating}
      key={index}
    />
  ));
  return (
    <Layout>
      <div className="products">
        {productsJSX}
      </div>
    </Layout>
  );
};

export default Products;
