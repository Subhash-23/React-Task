import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="fFirstBar">
          <h1>Subscribe Now</h1>
          <div>
            <input className='textBox' type="text" placeholder='enter your email for next update'/>
            <input className='btn' type="submit" value="SIGN UP" />
          </div>
        </div>
        <div className="fMiddleBar">
          <div className="mLeft">
            <h1>LOGO</h1>
            <h2>Download the app for easy order.</h2>
            <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</p>
            <img src="footer icons.PNG" alt="Footer Icons" />
          </div>
          <div className="mRight">
            <div className="abtUs1">
              <h1>About Us</h1>
              <a href="#">Blog</a>
              <a href="#">Working Process</a>
              <a href="#">Food</a>
              <a href="#">Restaurants</a>
              <a href="#">Delivery</a>
            </div>
            <div className="abtUs2">
              <h1>About Us</h1>
              <a href="#">Blog</a>
              <a href="#">Working Process</a>
              <a href="#">Food</a>
              <a href="#">Restaurants</a>
              <a href="#">Delivery</a>
            </div>
            <div className="getHelps">
              <h1>Get Helps</h1>
              <a href="#">Blog</a>
              <a href="#">Working Process</a>
              <a href="#">Food</a>
              <a href="#">Restaurants</a>
              <a href="#">Delivery</a>
            </div>
          </div>
        </div>
        <div className="fLastBar">
          <p>Copyright © All Right reserved.</p>
          <img src="card icons.PNG" alt="Card Logo" />
        </div>
    </div>
  )
}

export default Footer