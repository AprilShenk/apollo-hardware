import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { createProduct } from "../../services/products";
import "./ProductCreate.css";

const ProductCreate = () => {
  const [buttonText, setButtonText] = useState("PUBLISH");
  const [created, setCreated] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    imgURL1: "",
    imgURL2: "",
    imgURL3: "",
    description: "",
    price: "",
    rating: 0,
    quantity: "",
  });

  const changeText = (text) => setButtonText(text);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createProduct(product);
    setCreated(!created);
  };

  if (created) {
    alert(`${product.name} was created`);
    setTimeout(() => {
      changeText(`PUBLISH`);
      setProduct({
        name: "",
        imgURL1: "",
        imgURL2: "",
        imgURL3: "",
        description: "",
        price: "",
        quantity: "",
        reviews: [],
      });
    }, 2000);
    setCreated(!created);
  }

  return (
    <Layout>
      <div className="create-layout">
        <h3 className="admin">ADMIN</h3>
        <div className="create-container">
          <form className="create-form" onSubmit={handleSubmit}>
            <div className="image-container">
              <label htmlFor="imgURL1">Image # 1</label>
              <input
                type="link"
                className="img"
                placeholder="upload image"
                value={product.imgURL1}
                name="imgURL1"
                required
                onChange={handleChange}
              />
              <label htmlFor="imgURL2">Image # 2</label>
              <input
                type="link"
                className="img"
                placeholder="upload image"
                value={product.imgURL2}
                name="imgURL2"
                required
                onChange={handleChange}
              />
              <label htmlFor="imgURL3">Image # 3</label>
              <input
                type="link"
                className="img"
                placeholder="upload image"
                value={product.imgURL3}
                name="imgURL3"
                required
                onChange={handleChange}
              />
            </div>
            <div className="create-right">
            <div className="product">
              <div className="product-info">
                <div className="name-des">
                  <label htmlFor="name">PRODUCT TITLE</label>
                  <input
                    type="text"
                    className="name"
                    placeholder="Write your product title here..."
                    value={product.name}
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="name-des">
                  <label htmlFor="description">PRODUCT DESCRIPTION</label>
                  <textarea
                    type="text"
                    rows="10"
                    cols="50"
                    className="description"
                    placeholder="Write your product description here..."
                    value={product.description}
                    name="description"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="product-numbers">
                <div className="price-qty">
                  <label htmlFor="price">PRICE</label>
                  <input
                    type="number"
                    className="nums"
                    placeholder="Write product price here..."
                    value={product.price}
                    name="price"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="price-qty">
                  <label htmlFor="quantity">QTY IN STOCK</label>
                  <input
                    type="number"
                    className="nums"
                    placeholder="Write quanity..."
                    value={product.quantity}
                    name="quantity"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`submit-button`}
                onClick={() => changeText("PUBLISHED")}
              >
                {buttonText}
              </button>
              </div>
              </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProductCreate;
