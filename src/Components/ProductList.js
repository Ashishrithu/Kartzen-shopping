import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, cart, setCart }) {
  return (
    <div>
     
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
