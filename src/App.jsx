import './App.css';
import NavBar from './Components/NavBarComponent';
import Footer from './Components/FooterComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';
import { ProductProvider } from './context/ProductContext';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <ProductProvider>
      <Router>
        <header>
          <NavBar/>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </ProductProvider>
  )
}

export default App
