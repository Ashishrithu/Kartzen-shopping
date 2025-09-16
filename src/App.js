import './index.css';
import CartPage from './Components/CartPage';
import ProductList from './Components/ProductList';
import { useState, useEffect } from 'react';

function App() {
  // State variables
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-title-container">
          <h2 className="navbar-title">Kartzen</h2>
        </div>
        <button className="cart" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cart.length})
        </button>
      </nav>

      {/* Main Content */}
      {showCart ? (
        <CartPage cart={cart} setCart={setCart} />
      ) : (
        <>
          {/* Error message if API call fails */}
          {error && <p className="error">Error: {error}</p>}
          <ProductList products={products} cart={cart} setCart={setCart} />
        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Kartzen. All rights reserved.</p>
        <p>
          Built using React. Contact us at{" "}
          <a href="mailto:support@kartzen.com">support@kartzen.com</a>
        </p>
      </footer>
    </>
  );
}

export default App;
