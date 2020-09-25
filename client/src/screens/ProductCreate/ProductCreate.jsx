import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { createProduct } from "../../services/products";
import { Redirect } from "react-router-dom";
// import "./ProductCreate.css"

const ProductCreate = () => {
  const [product, setProduct] = useState({
    name: "",
    imgURL1: "",
    imgURL2: "",
    imgURL3: "",
    descriptioin: "",
    price: 0,
    rating: 0,
    quantity: 0,
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };
  if (isCreated) {
    return <Redirect to={"/products"} />;
  }

  return (
    <Layout>
      <div className="create-container">
        <h3>Admin</h3>
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="image-container">
            <label>
              Image # 1
              <input
                type="link"
                placeholder="upload image"
                value={product.imgURL1}
                name="imgURL1"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Image # 2
              <input
                type="link"
                placeholder="upload image"
                value={product.imgURL2}
                name="imgURL2"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Image # 3
              <input
                type="link"
                placeholder="upload image"
                value={product.imgURL3}
                name="imgURL3"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="product-info">
            <label>
              PRODUCT TITLE
              <input
                type="text"
                className="title"
                placeholder="write your product title here..."
                value={product.name}
                name="name"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              PRODUCT DESCRIPTION
              <textarea
                type="text"
                rows="10"
                cols="50"
                className="description"
                placeholder="write your product description here..."
                value={product.description}
                name="description"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="product-numbers">
            <label>
              PRICE
              <input
                type="number"
                className="price"
                placeholder="write your product price here..."
                value={product.price}
                name="price"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              QTY IN STOCK
              <input
                type="number"
                className="quantity"
                placeholder="write your products quanity here..."
                value={product.quantity}
                name="quantity"
                required
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit" className="submit-button">
            PUBLISH
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProductCreate;
