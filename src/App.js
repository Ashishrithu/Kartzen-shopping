import './App.css';
import CartPage from './Components/CartPage';
import ProductList from './Components/ProductList';
import { useState, useEffect } from 'react';

function App() {
  // stating variable for the cart
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  // to fetch the products from the API
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
        <h2 className="navbar-title">Kartzen</h2>
        <button className="cart" onClick={() => setShowCart(!showCart)}>
          🛒 Cart({cart.length})
        </button>
      </nav>

      {/* Conditional rendering */}
      {showCart ? (
        <CartPage cart={cart} setCart={setCart} />
      ) : (
        <ProductList products={products} cart={cart} setCart={setCart} />
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Kartzen. All rights reserved.</p>
        <p>
          Built with using React. Contact us at{" "}
          <a href="mailto:support@kartzen.com">support@kartzen.com</a>
        </p>
      </footer>
    </>
  );
}

export default App;
