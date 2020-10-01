import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import "./Carousel.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setDisplay(!display), 7000);
    return () => {
      clearTimeout(timeout);
    };
  });

  const productSlide1 = [];
  const productSlide2 = [];

  allProducts.forEach((product, index) => {
    if (index < 5) {
      productSlide1.push(product);
    } else if (index < 10) {
      productSlide2.push(product);
    } else {
      return;
    }
  });

  const displayPics1 = productSlide1.map((product) => (
    <CarouselCard
      name={product.name}
      imgURL1={product.imgURL1}
      key={product._id}
      id={product._id}
    />
  ));
  const displayPics2 = productSlide2.map((product) => (
    <CarouselCard
      name={product.name}
      imgURL1={product.imgURL1}
      key={product._id}
      id={product._id}
    />
  ));

  if (!display) {
    return (
      <div className="carousel-bar">
        <div>{displayPics2}</div>
        <div className="carSide">
          <h5 id="car-title">
            "Supplies for your
            <br /> next murder spree"
          </h5>
          <Link to="/products">
            <button id="car-button" type="submit">
              Shop More
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="carousel-bar">
        <div>{displayPics1}</div>
        <div className="carSide">
          <h5 id="car-title">
            "Supplies for your
            <br /> next murder spree"
          </h5>
          <Link to="/products">
            <button id="car-button" type="submit">
              Shop More
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Carousel;
