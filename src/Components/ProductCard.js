import React from "react";

function ProductCard({ product, cart, setCart }) {
  const addToCart = () => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="product-card"
      
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
      }}
    >
        <h4 className="product-title">
        {product.title}
      </h4>
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <p className="product-description">{product.description}</p>

      <p className="product-price">
        ${product.price}
      </p>
      <button
        onClick={addToCart}
        className="product-add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
