import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import "../ProductEdit/ProductEdit.css";
import { getProduct, updateProduct } from "../../services/products";
import BackArrow from "../../components/BackArrow/BackArrow";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    imgURL1: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
    price: 0,
    quantity: 0,
    reviews: [],
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = props.match.params;
    const updated = await updateProduct(id, product);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/products/${props.match.params.id}`} />;
  }

  return (
    <Layout>
      <BackArrow />
      <h1 id="edit-title">Product Edit</h1>
      <section className="edit-section">
        <div className="image-container-edit">
          <div className="image-and-input">
            <img
              className="edit-product-image"
              src={product.imgURL1}
              alt={product.name}
            />
            <form onSubmit={handleSubmit}>
              <textarea
                className="edit-input-image-link"
                placeholder="Image Link"
                value={product.imgURL1}
                name="imgURL1"
                required
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="image-and-input">
            <img
              className="edit-product-image"
              src={product.imgURL2}
              alt={product.name}
            />
            <form onSubmit={handleSubmit}>
              <textarea
                className="edit-input-image-link"
                placeholder="Image Link"
                value={product.imgURL2}
                name="imgURL2"
                required
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="image-and-input">
            <img
              className="edit-product-image"
              src={product.imgURL3}
              alt={product.name}
            />
            <form onSubmit={handleSubmit}>
              <textarea
                className="edit-input-image-link"
                placeholder="Image Link"
                value={product.imgURL3}
                name="imgURL3"
                required
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Name"
            value={product.name}
            name="name"
            required
            onChange={handleChange}
          />
          <textarea
            className="input-description"
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name="description"
            required
            onChange={handleChange}
          />
          <div className="price-qty-div">
            <div className="price-div">
              Price: $
              <input
                className="input-price"
                placeholder="Price"
                value={product.price}
                name="price"
                required
                onChange={handleChange}
              />
            </div>
            <div className="qty-div">
              Qty:
              <input
                className="input-quantity"
                placeholder="Quantity"
                value={product.quantity}
                name="quantity"
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default ProductEdit;
