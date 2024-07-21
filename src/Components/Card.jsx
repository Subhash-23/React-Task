import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import StarRating from "../Components/StarRating";
import "../Styles/Card.css";
import { Link } from 'react-router-dom';

const Card = () => {
   const { productData, loading, error } = useContext(ProductContext);
  return (
    <div className="product-grid">
      {productData.map(product => (
      <div key={product.id} className="product-card">
         <Link className='productLink' to={`/product/${product.id}`}>
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <div className="rating">
               <StarRating rating={product.rating} count={product.reviews.length} />
            </div>
            <p className='product-detail'>
               <span className="old-price">${product.price.toFixed(2)}</span>
               <span className="new-price">
               ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
               </span>
            </p>
         </Link>
      </div>
      ))}
   </div>
  )
}

export default Card