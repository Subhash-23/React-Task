import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import '../Styles/Card.css';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const RelatedProducts = ({ currentProduct }) => {
  const { productData } = useContext(ProductContext);

  const relatedProducts = productData.filter(product => {
    const isRelatedByCategory = product.category === currentProduct.category;
    const isRelatedByTags = product.tags.some(tag => currentProduct.tags.includes(tag));
    return (isRelatedByCategory || isRelatedByTags) && product.id !== currentProduct.id;
  });

  useEffect(() => {
    window.scrollTo({
      top: 350,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="product-grid">
      {relatedProducts.length > 0 ? (
        relatedProducts.map(product => (
          <div key={product.id} className="product-card">
            <Link className='productLink' to={`/product/${product.id}`}>
              <img src={product.images[0]} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <div className="rating">
                <StarRating rating={product.rating} count={product.reviews.length} />
              </div>
              <p className='product-detail'>
                <span className="new-price">
                  ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="old-price">${product.price.toFixed(2)}</span>
              </p>
            </Link>
          </div>
        ))
      ) : (
        <p>No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;
