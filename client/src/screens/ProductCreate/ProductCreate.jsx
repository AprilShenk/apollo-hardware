import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { createProduct } from "../../services/products";
import { Redirect } from "react-router-dom";
import "./ProductCreate.css";

const ProductCreate = () => {

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

  const [isCreated, setCreated] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
      <div>
        <h3 className="admin">ADMIN</h3>
        <div className="create-container">
          <form
            className="create-form"
            onSubmit={() => {
              handleSubmit();
              setIsClicked(true);
            }}
          >
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
            <div className="product">
              <div className="product-info">
                <div className="name-des">
                  <label htmlFor="name">PRODUCT TITLE</label>
                  <input
                    type="text"
                    className="name"
                    placeholder="write your product title here..."
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
                    placeholder="write your product description here..."
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
                    placeholder="write product price here..."
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
                    placeholder="write quanity..."
                    value={product.quantity}
                    name="quantity"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              { !isClicked ?
              <button type="submit" className="submit-btn">
                  PUBLISH
              </button>
                :
              <button type="submit" className="submit-btn-active">
                  PUBLISHED
              </button>
              }
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProductCreate;
