import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import {
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../services/products";
import DetailCarousel from "../../components/DetailCarousel/DetailCarousel";
import "./ProductDetail.css";
import BackArrow from "../../components/BackArrow/BackArrow";
import { getStars } from "../../utils/rating";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import Reviews from "../../components/Reviews/Reviews";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const { id } = useParams();

  const [review, setReview] = useState({
    author: "",
    rating: "",
    description: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  if (isDeleted) {
    return <Redirect to={"/products"} />;
  }

  const handleDelete = async () => {
    await deleteProduct(product._id);
    setDeleted(!isDeleted);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    product.reviews.push(review);
    setProduct(product);
    await updateProduct(id, product);
  };

  return (
    <Layout>
      <BackArrow />
      <div className="product-detail">
        <DetailCarousel
          imgURL1={product.imgURL1}
          imgURL2={product.imgURL2}
          imgURL3={product.imgURL3}
          name={product.name}
        />
        <div className="product-info-aside">
          <h2 id="detail-title">{product.name}</h2>
          <h3 className="rating">{getStars(product.rating)}</h3>
          <p id="product-description">{product.description}</p>
          <a id="price-qty-container">
          <a id="product-price"><span>Price:</span> ${product.price}</a>
          <a id="product-qty"><span>Qty:</span> {product.quantity}</a>
          </a>
          <button className="edit-button">
            <Link className="edit-link" to={`/products/${product._id}/edit`}>
              Edit Product
            </Link>
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete Product
          </button>
        </div>
        <div className="reviews wrapper">
          <ReviewForm
            author={review.author}
            rating={review.rating}
            description={review.description}
            onSubmit={handleSubmit}
            onChange={handleChange}
          />
          <Reviews reviews={product.reviews} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
