import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from "../../components/shared/Layout/Layout";
import { deleteProduct, getProduct } from '../../services/products';
import "./ProductDetail.css"

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
        
        <div>
          <div classname="imgSflex1"><img id="imgSmall"  src={product.imgURL1} alt={product.name} /></div>
          <div classname="imgSflex2"><img id="imgSmall"  src={product.imgURL1} alt={product.name} /></div>
          <div classname="imgSflex3"><img id="imgSmall"  src={product.imgURL1} alt={product.name} /></div>
        </div>
        <div className="imgCont">
          <div classname="imgBflex"><img id="imgBig" src={product.imgURL1} alt={product.name} /></div>
        </div>
        <div className="prodInfo">
          <h2>{product.name}</h2>
          <h3>{product.rating}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Qty: {product.quantity}</p>
          <button className="edit-button"><Link className="edit-link" to={`/products/${product._id}/edit`}>Edit</Link></button>
          <button className="delete-button" onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;