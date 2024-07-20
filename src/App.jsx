// import { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <Router>
      <header>
        <NavBar/>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
