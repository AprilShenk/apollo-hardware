import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import CarouselCard from '../../components/CarouselCard/CarouselCard'
import './Carousel.css'

const Carousel = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [display, setDisplay] = useState(false)

  setTimeout(() => setDisplay(!display), 7000)

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  const productSlide1 = [];
  const productSlide2 = [];

  allProducts.forEach((product, index) => {
    index < 5 ? productSlide1.push(product) : productSlide2.push(product);
  });

  const displayPics1 = productSlide1.map(product => 
    <CarouselCard name={product.name} imgURL1={product.imgURL1} key={product._id} id={product._id} />
  )
  const displayPics2 = productSlide2.map(product => 
    <CarouselCard name={product.name} imgURL1={product.imgURL1} key={product._id} id={product._id} />
  )

  if (!display) {
    return <div className="carousel-container">{displayPics2}</div>
  } else {
    return <div className="carousel-container">{displayPics1}</div>
  }

};

export default Carousel;
