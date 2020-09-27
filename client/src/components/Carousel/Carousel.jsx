import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import CarouselCard from "../CarouselCard/CarouselCard";
import "./Carousel.css";

const Carousel = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [curr, setCurr] = useState(0)
  
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const carouselJSX = allProducts.map((product, index) => (
    <CarouselCard
      _id={product._id}
      name={product.name}
      imgURL1={product.imgURL1}
      key={index}
    />
  ));
  
  return <div className="carousel">{carouselJSX}</div>;
};

export default Carousel;
