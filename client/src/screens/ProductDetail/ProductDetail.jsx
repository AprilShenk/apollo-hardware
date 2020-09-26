import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from "../../components/shared/Layout/Layout";
import { deleteProduct, getProduct } from '../../services/products';

const ProductDetail = () => {

  const [product, setProduct] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
    }
    fetchProduct()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="product-detail">
        {/* TODO: replace img with DetailCarousel */}
        <img src={product.imgURL1} alt={product.name}/>
        <h2>{product.name}</h2>
        <h3>{product.rating}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Qty: {product.quantity}</p>
        <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button>
        <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
      </div>
    </Layout>
  );
};

export default ProductDetail;