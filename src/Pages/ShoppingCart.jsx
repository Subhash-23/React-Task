import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "../Styles/ShoppingCart.css";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>;
  }

  return (
    <div className="cartContainer">

      <div className="shopping-cart">
        <div className="cartTitle">
          <h1>Shopping Cart</h1>
          <h1>{cartItems?.length} Items</h1>
        </div>
        <div className="cartContainer">
          <table className="cart-table">
            <thead>
              <tr>
                <th style={{textAlign:"left"}}>Product Detail</th>
                <th>Product QTY</th>
                <th>Price/Pcs</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={item.images[0]} alt={item.title} />
                      <div style={{ marginLeft: '10px', textAlign: "left" }}>
                        <h3 style={{fontSize: "1.2em"}}>{item.title}</h3>
                        <br />
                        <p>{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-qty">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <input type="text" className='quantity-num' value={item.quantity} readOnly />
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  <td>${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}</td>
                  <td>${((item.price * (1 - item.discountPercentage / 100)) * item.quantity).toFixed(2)}</td>
                  <td className='editDelBtn'>
                    <button className='edit'><CiEdit className='editIcon' /></button>
                    <button className='delete' onClick={() => removeFromCart(item.id)}><MdDelete className='deleteIcon' /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
