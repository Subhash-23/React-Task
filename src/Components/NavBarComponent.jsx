import React, { useContext, useState } from 'react';
import { MdLocalPhone } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      return total + ((item.price * (1 - item.discountPercentage / 100)) * item.quantity);
    }, 0).toFixed(2);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuItems = [
  { name: "Home", link: "/" },
  { name: "Shop", link: "/" },
  { name: "Product", link: "/" },
  { name: "Categories", link: "/" },
  { name: "Brands", link: "/" },
  { name: "About", link: "/" }
];
  return (
    <>
      <div className="topBar">
          Black Friday Banner
        </div>
        <div className="secondBar">
          <div className="sLeft">
            Welcome to shopping mart!
          </div>
          <div className="menuIcon" onClick={toggleMenu}>
            <div className={`${isMenuOpen ? "activebar1" : "bar1"}`}></div>
            <div className={`${isMenuOpen ? "hidebar2" : "bar2"}`}></div>
            <div className={`${isMenuOpen ? "activebar3" : "bar3"}`}></div>
          </div>
          <div className={`sRight ${isMenuOpen && 'active'}`}>
            {menuItems.map((item, index) => (
            <li key={index} onClick={toggleMenu} href={item.link}>
              <Link className='menuLinks' to={item.link}>{item.name}</Link>
            </li>
          ))}
          <div className="sRightMirror"></div>
          </div>
        </div>
        <div className='thirdBar'>
            <img src="logo.PNG" alt="Logo" height={"35px"} />
          <div className='tContactContainer'>
            <MdLocalPhone className='phoneIcon'/>
            <div className='tContact'>
              <p className='contactTitle'>Contact Us</p>
              <p className='contactNumber'>+8801556 6554 22</p>
            </div>
          </div>

          <div className='inputContainer'>
            <input type="text" />
            <CiSearch className='searchIcon'/>
          </div>

          <div className="tSmallContainer">
            <div className='tsmallcontact'>
              <MdLocalPhone className='phoneIcon'/>
              <div className='tContact'>
                <p className='contactTitle'>Contact Us</p>
                <p className='contactNumber'>+8801556 6554 22</p>
              </div>
            </div>
            <div className="tsmalluserContents">
              <FiUser className='userIcon'/>
              <IoMdHeartEmpty className='wishlistIcon'/>
              <div className="cartCount">
                <Link to='/shopping-cart'>
                  <IoMdCart className='cartIcon'/>
                </Link>
                <div className="itemsNum">
                  10
                </div>
                <div className="cartTotalPrice">
                  $ {calculateTotalCost()}
                </div>
              </div>
            </div>
          </div>

          <div className="tUserContainer">
            <FiUser className='userIcon'/>
            <IoMdHeartEmpty className='wishlistIcon'/>
            <div className="cartCount">
              <Link to='/shopping-cart'>
                <IoMdCart className='cartIcon'/>
              </Link>  
              <div className="itemsNum">
                10
              </div>
              <div className="cartTotalPrice">
                $ {calculateTotalCost()}
              </div>
            </div>
          </div>
        </div>
        <div className="fourthBar">
          <h1>Shop</h1>
          <p>Home / Shop</p>
        </div>
    </>
  )
}

export default NavBar