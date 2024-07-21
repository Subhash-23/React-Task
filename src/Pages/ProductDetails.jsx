// ProductDetails.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import "../Styles/ProductDetails.css";
import StarRating from "../Components/StarRating";
import RelatedProducts from '../Components/RelatedProducts';

const ProductDetails = () => {
  const { id } = useParams();
  const { productData } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);
  const [underlineStyle, setUnderlineStyle] = useState({});

  const updateUnderlineStyle = () => {
    if (tabRefs.current[activeTab]) {
      const { offsetLeft, clientWidth } = tabRefs.current[activeTab];
      setUnderlineStyle({
        left: offsetLeft,
        width: clientWidth,
      });
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    updateUnderlineStyle();
    window.addEventListener('resize', updateUnderlineStyle);
    return () => {
      window.removeEventListener('resize', updateUnderlineStyle);
    };
  }, [activeTab]);

  useEffect(() => {
    const selectedProduct = productData.find(prod => prod.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, productData]);

  useEffect(() => {
    window.scrollTo({
      top: 350,
      behavior: 'smooth',
    });
  }, []);

  if (!product) return <p className='errorProductText'>Product not found! :(</p>;

  return (
    <>
      <div className='productContainer'>
        <div className="left-contents">
          <img src={product.images[0]} alt={product.title} className="product-image" />
        </div>
        <div className="right-contents">
          <h1>{product.title}</h1>
          <div className="rating-price">
            <div className="price">
              <span className="new-price">
                ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
              <span className="old-price">${product.price.toFixed(2)}</span>
            </div>
            <div className="rating">
              <StarRating rating={product.rating} count={product.reviews.length} />
            </div>
          </div>
          <div className="product-info-box">
            <div className="brand">
              <h2>Category: </h2>
              <span>{product?.category}</span>
            </div>
            <div className="code">
              <h2>Product Code:</h2>
              <span>{product.sku}</span>
            </div>
            <div className="stocks">
              <h2>Available Stocks: </h2>
              <span>{product.stock}</span>
            </div>
            <div className="time">
              <h2>Delivery Time:</h2>
              <span>{product.shippingInformation}</span>
            </div>
          </div>
          <div className='buttons'>
            <button onClick={() => addToCart(product)} className='button'>Add to Cart</button>
            <Link to="/shopping-cart" className='button'>Buy Now</Link>
          </div>
        </div>
      </div>
      <div className="product-details-tabs">
        <div className="tabs">
          {['Description', 'Information', 'Reviews', 'Vendor Info'].map((tab, index) => (
            <button
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </button>
          ))}
          <div className="underline" style={underlineStyle}></div>
        </div>
        <div className="tab-content">
          <div className={`tab-pane ${activeTab === 0 ? 'active' : ''}`}>
            <h3>Description</h3>
            {product.description}
          </div>
          <div className={`tab-pane ${activeTab === 1 ? 'active' : ''}`}>
            <h3>Information</h3>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>SKU: {product.sku}</p>
            <p>Weight: {product.weight}g</p>
            <p>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
            <p>Warranty: {product.warrantyInformation}</p>
            <p>Shipping: {product.shippingInformation}</p>
            <p>Availability: {product.availabilityStatus}</p>
            <p>Return Policy: {product.returnPolicy}</p>
            <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
          </div>
          <div className={`tab-pane ${activeTab === 2 ? 'active' : ''}`}>
            <h3>Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <strong>{review.reviewerName}</strong> - <span>{new Date(review.date).toLocaleDateString()}</span>
                  <div className="review-rating">
                    {Array(review.rating).fill().map((_, i) => (
                      <span key={i} className="star">&#9733;</span>
                    ))}
                    {Array(5 - review.rating).fill().map((_, i) => (
                      <span key={i} className="star">&#9734;</span>
                    ))}
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <div className={`tab-pane ${activeTab === 3 ? 'active' : ''}`}>
            <h3>Vendor Info</h3>
          </div>
        </div>
      </div>
      <div className='related-product-details'>
        <h2 className='relatedTitle'>Related Products</h2>
        <RelatedProducts currentProduct={product} />
      </div>
    </>
  );
};

export default ProductDetails;
