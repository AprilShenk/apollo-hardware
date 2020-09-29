import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { deleteProduct, getProduct } from "../../services/products";
import DetailCarousel from "../../components/DetailCarousel/DetailCarousel";
import "./ProductDetail.css";
import BackArrow from "../../components/BackArrow/BackArrow";
import { getStars } from '../../utils/rating'

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [isDeleted, setDeleted] = useState(false);
  const { id } = useParams();

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
    return <Redirect to={"/products"} />
  }

  const handleDelete = async () => {
    await deleteProduct(product._id)
    setDeleted(!isDeleted)
  }

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
        <aside className="product-info-aside">
          <h2>{product.name}</h2>
          <h3 className="rating">{getStars(product.rating)}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Qty: {product.quantity}</p>
          <button className="edit-button">
            <Link className="edit-link" to={`/products/${product._id}/edit`}>
              Edit Product
            </Link>
          </button>
          <button
            className="delete-button"
            onClick={handleDelete}
          >
            Delete Product
          </button>
        </aside>
      </div>
    </Layout>
  );
};

export default ProductDetail;
